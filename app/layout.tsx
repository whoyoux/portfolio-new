import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import PlausibleProvider from "next-plausible";
// import StillInProgress from "@/components/still-in-progress";

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Full-Stack Explorer | Next.js & AI Coding Enjoyer | whoyoux",
	description:
		"Self-taught full-stack developer , AI enthusiast, and self-hosting enjoyer.",
	keywords:
		"Next.js, full-stack developer, AI coding, self-hosting, Vercel, movies, tech enthusiast",
	authors: [{ name: "whoyoux", url: "whoyoux.com" }],
	openGraph: {
		title: "Full-Stack Explorer | Next.js & AI Coding Enjoyer | whoyoux",
		description:
			"Self-taught full-stack developer , AI enthusiast, and self-hosting enjoyer.",
		url: "https://whoyoux.com",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					defer
					data-domain="whoyoux.com"
					src="https://plausible.whoyoux.com/js/script.outbound-links.pageview-props.tagged-events.js"
				/>
			</head>
			<body className={`${interSans.variable} antialiased`}>
				<PlausibleProvider
					domain="whoyoux.com"
					customDomain="https://plausible.whoyoux.com"
					manualPageviews={true}
					trackOutboundLinks={true}
					taggedEvents={true}
					selfHosted={true}
					trackLocalhost={true}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="max-w-screen-md mx-auto md:px-0 px-4">
							<Header />
							{/* <StillInProgress /> */}
							{children}
						</div>
					</ThemeProvider>
				</PlausibleProvider>
			</body>
		</html>
	);
}
