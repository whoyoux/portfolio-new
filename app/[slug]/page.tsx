import GoBackButton from "@/components/go-back-button";
import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";

import { unstable_ViewTransition as ViewTransition } from "react";

export async function generateStaticParams() {
	return PROJECTS.map((proj) => ({
		slug: proj.slug,
	}));
}

const ProjectPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const proj = getProjectBySlug(slug);

	if (!proj) return notFound();

	return (
		<div className="mt-4">
			<GoBackButton />
			<section className="mt-4 prose dark:prose-invert">
				<ViewTransition name={`proj-${proj.slug}`}>
					<h3>{proj.name}</h3>
				</ViewTransition>
				<p>{proj.description}</p>
			</section>
		</div>
	);
};

const getProjectBySlug = (slug: string) => {
	return PROJECTS.find((proj) => proj.slug === slug);
};

export default ProjectPage;
