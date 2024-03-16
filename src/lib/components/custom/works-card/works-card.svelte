<script lang="ts">
	import Button from "@/components/ui/button/button.svelte";
	import { cn } from "@/utils.js";
	import { ArrowUpRight } from "lucide-svelte";

	export let title: string;
	export let desc: string;
	export let href: string;
	export let website: string;
	export let src: string;
	export let alt: string;
	export let isLastCard = false;
</script>

<div class={cn("space-y-6 pb-8", !isLastCard && "border-b border-b-primary/20")}>
	<div class="space-y-2">
		<h3 class="text-2xl font-bold">{title}</h3>
		<p>{desc}</p>
	</div>
	<div class="flex items-center justify-center">
		<img
			{src}
			{alt}
			loading="lazy"
			decoding="async"
			data-src={src}
			class="aspect-video w-full rounded-lg object-cover"
			width="100%"
			height="100%"
      fetchpriority="high"
		/>
	</div>
	<Button
		{href}
		target="_blank"
		rel="noreferrer"
		class="gap-2 rounded-full sm:text-base"
		variant="outline">{website} <ArrowUpRight /></Button
	>
</div>
