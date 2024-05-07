import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "cli",
		description: "Terminal mode for my portofolio."
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};
