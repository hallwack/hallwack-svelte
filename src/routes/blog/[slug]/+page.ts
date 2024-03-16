import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	try {
		const post =
			(await import(`../../../../content/${params.slug}.md`)) ||
			(await import(`../../../../content/${params.slug}.svx`));
		const { title, date, description } = post.metadata;
		const Content = post.default;

		const pageMetaTags = Object.freeze({
			title,
			description,
      openGraph: {
        title, description
      }
		});

		return {
			Content,
			title,
			date,
			description,
			pageMetaTags
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
};
