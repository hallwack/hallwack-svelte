import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "work",
		description: "A summary of my work and contributions.",
		openGraph: {
			title: "work",
			description: "A summary of my work and contributions."
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};
