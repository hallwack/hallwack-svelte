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

	<ul class="flex flex-col gap-4">
		{#each data.blogs as post}
			<li>
				<h2>
					<a href={post.path} class="text-md">
						{post.meta.title}
					</a>
				</h2>
        <span class="text-base text-primary/70">
				Published {formatDate(post.meta.date)}
        </span>
			</li>
		{/each}
	</ul>
</div>
