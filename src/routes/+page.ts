import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "home",
		openGraph: {
			title: "home",
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};
