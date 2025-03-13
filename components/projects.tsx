import { PROJECTS_MOCKUP } from "@/constants";
import Link from "next/link";

export default function Projects() {
	return (
		<section>
			<h4>Projects</h4>
			<ul>
				{PROJECTS_MOCKUP.map((project) => (
					<li key={project.id}>
						<Link href="/">
							<h5>{project.name}</h5>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
