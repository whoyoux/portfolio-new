import { MY_LINKS } from "@/constants";
import MyLink from "./my-link";

export default function Links() {
	return (
		<section>
			<h4>🔗 My links</h4>
			<ul>
				{MY_LINKS.map((myLink) => (
					<li key={myLink.id}>
						<MyLink href={myLink.url} text={myLink.name}>
							<h5>{myLink.name}</h5>
						</MyLink>
					</li>
				))}
			</ul>
		</section>
	);
}
