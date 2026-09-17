import type { StaticImageData } from "next/image";

/**
 * Loads an image from `assets/` by its path relative to that directory,
 * e.g. `getAssetImage("snapcal/hero.png")`. Static import keeps width/height
 * and the blur placeholder available.
 */
export const getAssetImage = async (path: string): Promise<StaticImageData> => {
	const { default: image } = await import(`@/assets/${path}`);
	return image;
};
