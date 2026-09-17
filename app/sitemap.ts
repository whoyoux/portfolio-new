import type { MetadataRoute } from "next";
import { PROJECTS, SITE_URL } from "@/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
		...PROJECTS.map((proj) => ({
			url: `${SITE_URL}/${proj.slug}/`,
			changeFrequency: "yearly" as const,
			priority: 0.7,
		})),
	];
}
