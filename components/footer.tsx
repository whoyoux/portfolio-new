import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { GithubIcon } from "./icons";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MY_LINKS } from "@/constants";

const GITHUB_URL = MY_LINKS.find((l) => l.id === "id_link_github")?.url ?? "";
const EMAIL_URL = MY_LINKS.find((l) => l.id === "id_link_email")?.url ?? "";

const Footer = () => {
	return (
		<footer className="border-t py-8">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} whxx. All rights reserved.
					</p>
				</div>
				<div className="flex gap-4">
					<Link
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
					>
						<GithubIcon />
					</Link>
					<Link
						href={EMAIL_URL}
						className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
					>
						<Mail />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
