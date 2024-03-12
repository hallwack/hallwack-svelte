import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "blog",
		description: "Read my thoughts on tech and more.",
		openGraph: {
			title: "blog",
			description: "Read my thoughts on tech and more."
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};
