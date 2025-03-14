import Image from "next/image";
import placeholderImage from "@/assets/placeholder.webp";

import type { StaticImageData } from "next/image";

type Props = {
	src?: StaticImageData;
	alt: string;
	quality?: number;
};

export default function MDXImage({ src, alt, quality }: Props) {
	return (
		<div className="w-full aspect-video bg-card rounded-lg border relative overflow-hidden">
			<Image
				src={src || placeholderImage}
				placeholder="blur"
				className="object-cover my-0! rounded-lg"
				alt={alt}
				fill
				sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
				quality={quality || 100}
			/>
		</div>
	);
}
