import { MY_LINKS, PROJECTS } from "@/constants";
import Link from "next/link";

const GITHUB_URL = MY_LINKS.find((link) => link.id === "id_link_github")?.url;

export default function Projects() {
	return (
		<section>
			<h4>Projects</h4>
			<ul>
				{PROJECTS.map((project) => (
					<li key={project.id}>
						<Link href={`/${project.slug}`}>
							<h5>{project.name}</h5>
						</Link>
						<p className="mt-0">{project.tagline}</p>
					</li>
				))}
			</ul>
			<p>
				More projects on{" "}
				<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
					my GitHub
				</a>
				.
			</p>
		</section>
	);
}
