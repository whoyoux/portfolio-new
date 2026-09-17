import { BIRTH_DATE } from "@/constants";
import { getAge } from "@/lib/utils";

export default function AboutMe() {
	const age = getAge(BIRTH_DATE);

	return (
		<section>
			<h4>About me</h4>
			<p>
				A {age}yr youtube educated frontend and backend enjoyer (nextjs) <br />
				New technologies enthusiast (AI writing code instead of me) <br />
				Movies and TV series critic <br />
				Self-hosted and Vercel enjoyer <br />
				Polish beer expert and home winemaker (I&apos;m just a student) <br />
			</p>
		</section>
	);
}
