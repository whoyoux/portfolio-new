import { MY_PACKAGES } from "@/constants";
import Link from "next/link";

export default function OpenSource() {
	return (
		<section>
			<h4>💻 My open-source packages</h4>
			<ul>
				{MY_PACKAGES.map((pkg) => (
					<li key={pkg.id}>
						<Link href={pkg.url}>
							<h5>{pkg.name}</h5>
						</Link>
						<p className="mt-0">{pkg.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
