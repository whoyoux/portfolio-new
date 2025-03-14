import type { StaticImageData } from "next/image";
import placeholderImage from "@/assets/placeholder.webp";

import pmc_hero from "@/assets/pureminecraft/hero.webp";

type Technologies = 
    | "NextJS" 
    | "TypeScript" 
    | "React" 
    | "Node.js" 
    | "Prisma" 
    | "Drizzle" 
    | "PostgreSQL" 
    | "MongoDB" 
    | "TailwindCSS" 
    | "Docker" 
    | "AWS" 
    | "Vercel" 
    | "GitHub Actions" 
    | "Jest" 
    | "Cypress" 
    | "GraphQL" 
    | "Redis" 
    | "Express.js" 
    | "NestJS" 
    | "tRPC"
	| "Stripe"
	| "shadcn-ui"
	| "OpenAI API"
	| "Vercel AI SDK"
	| "Crypto"
	| "Zod"

type Project = {
	id: string,
	name: string,
	slug: string,
	technologies: Technologies[],
	description: string,
	images: StaticImageData[],
	siteUrl: string,
	githubUrl: string
}

export const PROJECTS: Project[] = [
	{
		id: "id_proj_1",
		name: "AI Generator",
        slug: "ai-generator",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur natus esse, sint voluptate beatae laborum quae magnam! Minima, vel hic! Est labore explicabo ipsam libero rerum! Amet, nulla tenetur!",
		images: [placeholderImage],
		siteUrl: "",
		githubUrl: "",
		technologies: ["NextJS", "TypeScript", "Prisma", "TailwindCSS", "PostgreSQL", "Stripe", "OpenAI API", "Zod"]
	},
	{
		id: "id_proj_2",
		name: "Plantcare",
        slug: "plantcare",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur natus esse, sint voluptate beatae laborum quae magnam! Minima, vel hic! Est labore explicabo ipsam libero rerum! Amet, nulla tenetur!",
		images: [placeholderImage],
		siteUrl: "",
		githubUrl: "",
		technologies: ["NextJS", "TypeScript", "Prisma", "TailwindCSS", "PostgreSQL", "Stripe", "Vercel AI SDK", "Zod"]
	},
	{
		id: "id_proj_3",
		name: "Ecommerce",
        slug: "ecommerce",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur natus esse, sint voluptate beatae laborum quae magnam! Minima, vel hic! Est labore explicabo ipsam libero rerum! Amet, nulla tenetur!",
		images: [placeholderImage],
		siteUrl: "",
		githubUrl: "",
		technologies: ["NextJS", "TypeScript", "Prisma", "TailwindCSS", "PostgreSQL", "Stripe", "Zod"]
	},
	{
		id: "id_proj_4",
		name: "PureMinecraft",
        slug: "pureminecraft",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur natus esse, sint voluptate beatae laborum quae magnam! Minima, vel hic! Est labore explicabo ipsam libero rerum! Amet, nulla tenetur!",
		images: [pmc_hero],
		siteUrl: "",
		githubUrl: "",
		technologies: ["NextJS", "TypeScript", "Prisma", "TailwindCSS", "PostgreSQL", "Stripe", "Zod"]
	},
	{
		id: "id_proj_5",
		name: "ShareIt",
        slug: "shareit",
		description: "secure file hosting, encrypts and decrypts all user files",
		images: [placeholderImage],
		siteUrl: "",
		githubUrl: "",
		technologies: ["NextJS", "TypeScript", "Prisma", "TailwindCSS", "PostgreSQL", "Stripe", "Zod", "Crypto"]
	},
];

export const MY_LINKS = [
    {
        id: "id_link_github",
        name: "GitHub",
        url: "https://github.com/whoyoux"
    },
    {
        id: "id_link_cv",
        name: "CV",
        url: "#"
    },
	{
		id: "id_link_email",
		name: "Email",
		url: ""
	}
]

export const MY_PACKAGES = [
	{
		id: "id_opensource_packages_dummyarray",
		name: "dummy-array",
		description: "A simple package for creating a dummy array.",
		url: "https://www.npmjs.com/package/dummy-array"
	}
]