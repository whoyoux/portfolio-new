import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	// Fully static site (`out/`), served from Dokploy behind Cloudflare CDN.
	output: "export",
	// `/snapcal/index.html` instead of `/snapcal.html` – works on any static server.
	trailingSlash: true,
	images: {
		// The image optimizer needs a Node server; static export serves files as-is.
		unoptimized: true,
	},
};

const withMDX = createMDX();

export default withMDX(nextConfig);
