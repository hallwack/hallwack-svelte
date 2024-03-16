import { fetchBlogs } from "@/utils.js";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const allBlogs = await fetchBlogs();

	const sortedBlogs = allBlogs.sort(
		(a, b) =>
			(new Date(b.meta.date) as unknown as number) - (new Date(a.meta.date) as unknown as number)
	);

	return json(sortedBlogs);
};
