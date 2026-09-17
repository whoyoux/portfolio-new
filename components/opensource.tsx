import { MY_PACKAGES } from "@/constants";

export default function OpenSource() {
	return (
		<section>
			<h4>💻 My open-source packages</h4>
			<ul>
				{MY_PACKAGES.map((pkg) => (
					<li key={pkg.id}>
						<a href={pkg.url} target="_blank" rel="noopener noreferrer">
							<h5>{pkg.name}</h5>
						</a>
						<p className="mt-0">{pkg.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
