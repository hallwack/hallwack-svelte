<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";

	export let href: string;
	export let title: string;
	export let desc: string;
</script>

<a
	{href}
	target="_blank"
	rel="noreferrer"
	class="flex w-full justify-between rounded-lg border px-4 py-3 shadow-lg shadow-white transition-shadow duration-300 hover:shadow-black/10 dark:shadow-black dark:hover:shadow-white/10"
>
	<div class="flex flex-col gap-2">
		<p class="text-xl font-semibold">{title}</p>
		<span class="text-sm font-normal">{desc}</span>
	</div>
	<ArrowUpRight size={24} />
</a>
