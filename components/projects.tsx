import { PROJECTS } from "@/constants";
import Link from "next/link";

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
		</section>
	);
}
