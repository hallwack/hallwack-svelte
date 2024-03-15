<script lang="ts">
	import type { PageData } from "./$types";
	import { formatDate } from "@/utils.js";

	export let data: PageData;
	const { title, Content, date } = data;
</script>

<article class="my-8 space-y-8">
	<hgroup class="flex flex-col gap-4">
		<h1 class="text-3xl font-bold">{title}</h1>
		<span class="text-sm font-medium text-slate-600 dark:text-slate-400">{formatDate(date)}</span>
	</hgroup>

	<div class="prose dark:prose-invert sm:prose-ul:font-medium sm:prose-ol:font-medium sm:prose-li:font-medium sm:prose-p:font-medium">
		<Content />
	</div>
</article>
