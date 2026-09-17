import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import { SITE_URL } from "@/constants";

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: "Full-Stack Explorer | Next.js & AI Coding Enjoyer | whxx",
	description:
		"Junior Frontend Software Developer at Novomatic Technologies Poland. Self-taught full-stack developer, AI enthusiast and self-hosting enjoyer.",
	keywords:
		"Next.js, full-stack developer, AI coding, self-hosting, Vercel, movies, tech enthusiast",
	authors: [{ name: "whxx", url: SITE_URL }],
	openGraph: {
		title: "Full-Stack Explorer | Next.js & AI Coding Enjoyer | whxx",
		description:
			"Junior Frontend Software Developer at Novomatic Technologies Poland. Self-taught full-stack developer, AI enthusiast and self-hosting enjoyer.",
		url: SITE_URL,
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
			<body className={`${interSans.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="max-w-screen-md mx-auto md:px-0 px-4">
						<Header />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
