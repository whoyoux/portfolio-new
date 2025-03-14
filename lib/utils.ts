import { PROJECTS } from "@/constants";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getProjectBySlug = (slug: string) => {
	return PROJECTS.find((proj) => proj.slug === slug);
};