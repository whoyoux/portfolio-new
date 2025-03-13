import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";

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
