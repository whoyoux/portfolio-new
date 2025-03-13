import Link from "next/link";
import { ThemeDropdown } from "./theme-dropdown";

const Header = () => {
	return (
		<header className="flex items-center justify-between py-6 border-b mb-6">
			<Link href="/">
				<h1 className="font-medium">whoyoux</h1>
			</Link>
			<div>
				<ThemeDropdown />
			</div>
		</header>
	);
};

export default Header;
