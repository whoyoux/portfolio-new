import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import { getAssetImage } from "@/lib/images";

const IMAGE_SIZES = "(max-width: 768px) calc(100vw - 2rem), 768px";

/**
 * Single place for every component used inside `content/*.mdx`.
 * - links: internal ones go through next/link, external ones open in a new tab
 * - images: `![alt](snapcal/dashboard.png)` is resolved from `assets/`
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: MDXLink,
		img: MDXImage,
		...components,
	};
}

function MDXLink({ href = "/", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return (
			<a href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</a>
	);
}

async function MDXImage({ src, alt = "" }: ImgHTMLAttributes<HTMLImageElement>) {
	if (typeof src !== "string") return null;

	const image = await getAssetImage(src);

	return (
		<Image
			src={image}
			alt={alt}
			placeholder="blur"
			sizes={IMAGE_SIZES}
			className="w-full h-auto aspect-video object-cover rounded-lg border bg-card my-0!"
		/>
	);
}
