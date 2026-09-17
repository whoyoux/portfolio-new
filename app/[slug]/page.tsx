import GoBackButton from "@/components/go-back-button";
import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "lucide-react";

import Image from "next/image";
import { cn, getProjectBySlug } from "@/lib/utils";
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

	const hero = await getAssetImage(proj.hero);
	const title = `${proj.name} | whxx`;

	return {
		title,
		description: proj.tagline,
		openGraph: {
			title,
			description: proj.tagline,
			images: [{ url: hero.src, width: hero.width, height: hero.height }],
		},
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
					{/* Title is an h2; MDX `##` headings render as h3 (see mdx-components.tsx). */}
					<h2 className="mt-2 mb-1">{proj.name}</h2>
					<p className="mt-0 text-muted-foreground">{proj.tagline}</p>

					<div className="w-full aspect-video bg-card rounded-lg border relative">
						<Image
							src={heroImage}
							placeholder="blur"
							className="object-cover my-0! rounded-lg"
							alt={`${proj.name} homepage`}
							fill
							sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
							priority
						/>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex w-full gap-2 items-center flex-wrap">
						{proj.technologies.map((tech) => (
							<Badge key={`id-tech-${tech}`} variant="secondary">
								{tech}
							</Badge>
						))}
					</div>

					<div className="flex gap-2 flex-wrap">
						<ExternalButton href={proj.repo}>
							<GithubIcon />
							Source code
						</ExternalButton>
						{proj.live && (
							<ExternalButton href={proj.live}>
								<ExternalLink />
								Live
							</ExternalButton>
						)}
					</div>
				</div>

				<div>
					<MDX />
				</div>
			</div>
			<Footer />
		</div>
	);
}

function ExternalButton({ href, children }: { href: string; children: ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(buttonVariants({ variant: "outline", size: "sm" }), "no-underline")}
		>
			{children}
		</a>
	);
}

export const dynamicParams = false;
