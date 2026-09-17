import GoBackButton from "@/components/go-back-button";
import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";

import { ViewTransition } from "react";
import Image from "next/image";
import { getProjectBySlug } from "@/lib/utils";
import { getAssetImage } from "@/lib/images";
import Footer from "@/components/footer";

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
		title: `${proj.name} | whxx`,
	};
}
export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const proj = getProjectBySlug(slug);

	if (!proj) return notFound();

	const [{ default: MDX }, heroImage] = await Promise.all([
		import(`@/content/${slug}.mdx`),
		getAssetImage(proj.hero),
	]);

	return (
		<div>
			<GoBackButton />
			<div className="prose dark:prose-invert w-full max-w-full flex flex-col gap-4 md:gap-8">
				<div>
					<ViewTransition name={`proj-${proj.slug}`}>
						<h3 className="mt-2">{proj.name}</h3>
					</ViewTransition>

					<div className="w-full aspect-video bg-card rounded-lg border relative">
						<Image
							src={heroImage}
							placeholder="blur"
							className="object-cover my-0! rounded-lg"
							alt={`${proj.name} homepage`}
							fill
							sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
						/>
					</div>
				</div>

				{/* Technologies badges */}
				<div className="flex w-full gap-2 items-center flex-wrap">
					{proj.technologies.map((tech) => (
						<Badge key={`id-tech-${tech}`} variant="secondary">
							{tech}
						</Badge>
					))}
				</div>
				{/* END OF Technologies badges */}

				<div>
					<MDX />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export const dynamicParams = false;
