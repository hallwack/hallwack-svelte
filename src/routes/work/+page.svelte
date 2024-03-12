<script lang="ts">
	import { fade } from "svelte/transition";
	import { worksList } from "$lib/components/custom/works-card/index";
	import WorksCard from "@/components/custom/works-card/works-card.svelte";
</script>

<div
	in:fade
	class="my-8 flex flex-col gap-8 text-justify text-base font-normal leading-relaxed sm:text-lg sm:font-medium"
>
	<h1 class="text-2xl font-bold tracking-wide">my work 👷</h1>

	<p>A lot of my works when I got into this job.</p>

	<div class="flex flex-col gap-6">
		<div class="space-y-4">
			<h2 class="text-3xl font-bold">Junior Web Developer at BTEKLabs</h2>
			<p>
				Joined in 2022, I've been working on most of the projects. Currently, my team and I focusing
				on building Warehouse Management System and File Management System for several companies.
			</p>
		</div>

		{#each worksList as item}
			<WorksCard {...item} />
		{/each}
	</div>
</div>
