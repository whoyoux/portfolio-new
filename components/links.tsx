import { MY_LINKS } from "@/constants";

export default function Links() {
	return (
		<section>
			<h4>🔗 My links</h4>
			<ul>
				{MY_LINKS.map((myLink) => (
					<li key={myLink.id}>
						{/* plain anchors: these are files / mailto / external, not routes */}
						<a href={myLink.url} target="_blank" rel="noopener noreferrer">
							<h5>{myLink.name}</h5>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
