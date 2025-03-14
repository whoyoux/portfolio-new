import { cn } from "@/lib/utils";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Footer = () => {
	return (
		<footer className="border-t py-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-sm text-muted-foreground">
							© {new Date().getFullYear()} whoyoux. All rights reserved.
						</p>
					</div>
					<div className="flex gap-4">
						<Link
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className={cn(buttonVariants({variant: "ghost", size: "icon"}))}
						>
                            <Github />
						</Link>
						{/* <Link
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className={cn(buttonVariants({variant: "ghost", size: "icon"}))}
						>
                            <Linkedin size={24}/>
						</Link> */}
						<Link
							href="mailto:twoj@email.com"
							className={cn(buttonVariants({variant: "ghost", size: "icon"}))}
						>
                            <Mail />
						</Link>
					</div>
				</div>
		</footer>
	);
};

export default Footer;
