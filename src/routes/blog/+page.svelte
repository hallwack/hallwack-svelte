<script lang="ts">
	import { fade } from "svelte/transition";
	import type { PageData } from "./$types";
	import { formatDate } from "@/utils.js";

	export let data: PageData;
</script>

<div
	in:fade
	class="my-8 flex flex-col gap-8 text-justify text-base font-medium leading-relaxed sm:text-lg"
>
	<h1 class="text-2xl font-bold tracking-wide">blog 📚</h1>

	<ul>
		{#each data.blogs as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {formatDate(post.meta.date)}
			</li>
		{/each}
	</ul>
</div>
