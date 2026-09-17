import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { Children, isValidElement } from "react";
import type { AnchorHTMLAttributes, HTMLAttributes, ImgHTMLAttributes } from "react";
import { getAssetImage } from "@/lib/images";

const IMAGE_SIZES = "(max-width: 768px) calc(100vw - 2rem), 768px";

/**
 * Single place for every component used inside `content/*.mdx`.
 * - headings: `##` renders as h3, one level below the project title (h2)
 * - links: internal ones go through next/link, external ones open in a new tab
 * - images: `![Caption](snapcal/dashboard.webp)` on its own line is resolved
 *   from `assets/` and rendered as a figure with the alt text as its caption
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h2: (props: HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} />,
		p: MDXParagraph,
		a: MDXLink,
		img: MDXImage,
		...components,
	};
}

/** Markdown wraps a lone image in a paragraph; a <figure> is not allowed inside <p>. */
function MDXParagraph({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
	const kids = Children.toArray(children);
	if (kids.length === 1 && isValidElement(kids[0]) && kids[0].type === MDXImage) {
		return kids[0];
	}
	return <p {...props}>{children}</p>;
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
		<figure className="my-6">
			<Image
				src={image}
				alt={alt}
				placeholder="blur"
				sizes={IMAGE_SIZES}
				className="w-full h-auto rounded-lg border bg-card my-0!"
			/>
			{alt && (
				<figcaption className="mt-2 text-sm text-muted-foreground">{alt}</figcaption>
			)}
		</figure>
	);
}
