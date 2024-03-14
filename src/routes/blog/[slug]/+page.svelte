<script lang="ts">
	import type { PageData } from "./$types";
	import { formatDate } from "@/utils.js";

	export let data: PageData;
	const { title, Content, date } = data;
</script>

<article>
	<hgroup class="my-8 flex flex-col gap-2">
		<h1 class="text-5xl font-extrabold">{title}</h1>
		<span class="text-sm font-medium text-slate-600 dark:text-slate-400">{formatDate(date)}</span>
	</hgroup>

	<div class="prose prose-slate dark:prose-invert">
		<Content />
	</div>
</article>
