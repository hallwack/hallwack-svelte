<script lang="ts">
	import { fade } from "svelte/transition";
	import { stackList, toolsList } from "$lib/components/custom/tools-card/index";
	import ToolsCard from "@/components/custom/tools-card/tools-card.svelte";
</script>

<div
	in:fade
	class="my-8 flex flex-col gap-8 text-justify text-base font-medium leading-relaxed sm:text-lg"
>
	<h1 class="text-2xl font-bold tracking-wide">tools/stack 🔨</h1>

	<p>The tools or stack for dev and productivity.</p>

	<div class="flex flex-col gap-4">
		<h2 class="text-xl font-semibold">Tech Stack</h2>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each stackList as item}
				<ToolsCard {...item} />
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-4">
		<h2 class="text-xl font-semibold">Tools</h2>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each toolsList as item}
				<ToolsCard {...item} />
			{/each}
		</div>
	</div>
</div>
