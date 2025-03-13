import AboutMe from "@/components/about-me";
import Education from "@/components/education";
import Links from "@/components/links";
import OpenSource from "@/components/opensource";
import Projects from "@/components/projects";
import StillInProgress from "@/components/still-in-progress";

export default function Home() {
	return (
		<>
			<StillInProgress />
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
