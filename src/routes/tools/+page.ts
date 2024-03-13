import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "tools",
		description: "Tools that i used to creeating website and productivity.",
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};
