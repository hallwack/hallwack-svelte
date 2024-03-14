import type { MetaTagsProps } from "svelte-meta-tags";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const pageMetaTags = Object.freeze({
		title: "blog",
		description: "Read my thoughts on tech and more."
	}) satisfies MetaTagsProps;

	const response = await fetch(`/api/blogs`);
	const blogs = await response.json();

	return {
		pageMetaTags,
		blogs
	};
};
