import type { MetaTagsProps } from "svelte-meta-tags";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ url }) => {
	const baseMetaTags = Object.freeze({
		title: "Raihan Adam",
		titleTemplate: "%s | Raihan Adam",
		description: "A junior web developer",
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			title: "Raihan Adam",
			description: "A junior web developer",
			siteName: "Raihan Adam",
			images: [
				{
					url: new URL(url.origin).href + "opengraph-image.jpg"
				}
			]
		},
		twitter: {
			title: "Raihan Adam",
			card: "summary_large_image"
		}
	}) satisfies MetaTagsProps;

	return { baseMetaTags };
};
