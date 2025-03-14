import AboutMe from "@/components/about-me";
import Education from "@/components/education";
import Links from "@/components/links";
import OpenSource from "@/components/opensource";
import Projects from "@/components/projects";

export default function Home() {
	return (
		<>
			<div className="space-y-4 md:space-y-8 prose dark:prose-invert">
				<AboutMe />
				<Education />
				<Projects />
				<OpenSource />
				<Links />
			</div>
		</>
	);
}
