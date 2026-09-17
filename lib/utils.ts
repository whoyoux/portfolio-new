import { PROJECTS } from "@/constants";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getProjectBySlug = (slug: string) => {
	return PROJECTS.find((proj) => proj.slug === slug);
};
/** Full years between `birthDate` and `now`; evaluated at build time for static pages. */
export const getAge = (birthDate: Date, now = new Date()) => {
	let age = now.getFullYear() - birthDate.getFullYear();
	const hadBirthday =
		now.getMonth() > birthDate.getMonth() ||
		(now.getMonth() === birthDate.getMonth() &&
			now.getDate() >= birthDate.getDate());
	if (!hadBirthday) age--;
	return age;
};
