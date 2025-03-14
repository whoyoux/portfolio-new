import GoBackButton from "@/components/go-back-button";
import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";

import placeholderImage from "@/assets/placeholder.webp";

import { unstable_ViewTransition as ViewTransition } from "react";
import Image from "next/image";

export async function generateStaticParams() {
	return PROJECTS.map((proj) => ({
		slug: proj.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const proj = getProjectBySlug(slug);
	if (!proj) return;

	return {
		title: `${proj.name} | whoyoux`,
	};
}
const ProjectPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const proj = getProjectBySlug(slug);

	if (!proj) return notFound();

	const heroImage = proj.images[0] || placeholderImage;

	return (
		<div className="mt-4">
			<GoBackButton />
			<section className="mt-4 prose dark:prose-invert w-full max-w-full">
				<ViewTransition name={`proj-${proj.slug}`}>
					<h3>{proj.name}</h3>
				</ViewTransition>

				{/* HERO IMAGE */}
				<div className="w-full aspect-video bg-card rounded-lg border relative">
					<Image
						src={heroImage}
						placeholder="blur"
						className="object-cover my-0! rounded-lg border"
						alt={`${proj.name} homepage`}
						fill
						sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
						quality={100}
					/>
				</div>
				{/* END OF HERO IMAGE */}

				<p>{proj.description}</p>
			</section>
		</div>
	);
};

const getProjectBySlug = (slug: string) => {
	return PROJECTS.find((proj) => proj.slug === slug);
};

export default ProjectPage;
