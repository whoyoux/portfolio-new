import GoBackButton from "@/components/go-back-button";

export default function NotFound() {
	return (
		<div className="prose dark:prose-invert">
			<h3>404 – page not found</h3>
			<p>There is nothing here.</p>
			<GoBackButton />
		</div>
	);
}
