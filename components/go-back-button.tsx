import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Undo } from "lucide-react";
import Link from "next/link";

const GoBackButton = () => {
	return (
		<Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
			<Undo />
			Go back
		</Link>
	);
};

export default GoBackButton;
