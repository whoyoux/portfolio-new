export const SITE_URL = "https://whxx.dev";

export const BIRTH_DATE = new Date("2004-04-15");

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
	| "Zod";

type Project = {
	id: string;
	name: string;
	slug: string;
	technologies: Technologies[];
	/** Path relative to `assets/`, see `getAssetImage`. */
	hero: string;
};

export const PROJECTS: Project[] = [
	{
		id: "id_proj_1",
		name: "AI Generator",
		slug: "ai-generator",
		hero: "ai-generator/hero.webp",
		technologies: [
			"NextJS",
			"TypeScript",
			"Prisma",
			"TailwindCSS",
			"PostgreSQL",
			"Stripe",
			"OpenAI API",
			"Zod",
		],
	},
	{
		id: "id_proj_2",
		name: "Plantcare",
		slug: "plantcare",
		hero: "plantcare/hero.webp",
		technologies: [
			"NextJS",
			"TypeScript",
			"Prisma",
			"TailwindCSS",
			"PostgreSQL",
			"Stripe",
			"Vercel AI SDK",
			"Zod",
		],
	},
	{
		id: "id_proj_3",
		name: "Ecommerce",
		slug: "ecommerce",
		hero: "ecommerce/hero.webp",
		technologies: [
			"NextJS",
			"TypeScript",
			"Prisma",
			"TailwindCSS",
			"PostgreSQL",
			"Stripe",
			"Zod",
		],
	},
	{
		id: "id_proj_4",
		name: "PureMinecraft",
		slug: "pureminecraft",
		hero: "pureminecraft/hero.webp",
		technologies: [
			"NextJS",
			"TypeScript",
			"Prisma",
			"TailwindCSS",
			"PostgreSQL",
			"Stripe",
			"Zod",
		],
	},
	{
		id: "id_proj_5",
		name: "ShareIt",
		slug: "shareit",
		hero: "shareit/hero.webp",
		technologies: [
			"NextJS",
			"TypeScript",
			"Prisma",
			"TailwindCSS",
			"PostgreSQL",
			"Stripe",
			"Zod",
			"Crypto",
		],
	},
	{
		id: "id_proj_6",
		name: "SnapCal",
		slug: "snapcal",
		hero: "snapcal/hero.webp",
		technologies: [
			"NextJS",
			"TypeScript",
			"Prisma",
			"TailwindCSS",
			"PostgreSQL",
			"Zod",
			"shadcn-ui",
			"Vercel AI SDK",
		],
	},
];

export const MY_LINKS = [
	{
		id: "id_link_github",
		name: "GitHub",
		url: "https://github.com/whoyoux",
	},
	{
		id: "id_link_cv",
		name: "CV",
		url: "/cv.pdf",
	},
	{
		id: "id_link_email",
		name: "Email",
		url: "mailto:teczakm@gmail.com",
	},
];

export const MY_PACKAGES = [
	{
		id: "id_opensource_packages_dummyarray",
		name: "dummy-array",
		description: "A simple package for creating a dummy array.",
		url: "https://www.npmjs.com/package/dummy-array",
	},
	{
		id: "id_opensource_packages_@whoyoux/simple-logger",
		name: "@whoyoux/simple-logger",
		description: "A simple logger for logging messages to the console.",
		url: "https://www.npmjs.com/package/@whoyoux/simple-logger",
	}
];
