import { MY_LINKS } from "@/constants";
import Link from "next/link";

export default function Links() {
	return (
		<section>
			<h4>🔗 My links</h4>
			<ul>
				{MY_LINKS.map((myLink) => (
					<li key={myLink.id}>
						<Link href={myLink.url} prefetch={true}>
							<h5>{myLink.name}</h5>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
