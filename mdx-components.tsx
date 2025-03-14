import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { JSX, ClassAttributes, AnchorHTMLAttributes } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: (props) => CustomLink(props),
		img: (props) => (
			<div className="w-full aspect-video bg-card rounded-lg border relative">
				<Image
					sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
					className="object-cover my-0! rounded-lg border w-full aspect-video"
					fill
					quality={100}
					{...(props as ImageProps)}
				/>
			</div>
		),
		...components,
	};
}

function CustomLink(
	props: JSX.IntrinsicAttributes &
		ClassAttributes<HTMLAnchorElement> &
		AnchorHTMLAttributes<HTMLAnchorElement>,
) {
	const href = props.href || "/";

	if (href.startsWith("/")) {
		return (
			<Link href={href} target="_blank" rel="noopener noreferrer" {...props}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return <a {...props} />;
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
