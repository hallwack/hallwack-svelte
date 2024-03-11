<script lang="ts">
	import { page } from "$app/stores";
	import { cn } from "@/utils.js";
	import ThemeToggle from "../theme-toggle/theme-toggle.svelte";
	import { links } from "./index";
</script>

<nav class="my-8 flex items-center gap-12">
	<ul class="flex items-center gap-4">
		{#each links as link}
			<li>
				<a
					href={link.href}
					class={cn(
						"text-xl font-semibold text-primary/60 hover:underline hover:underline-offset-4",
						link.href === $page.url.pathname && "text-primary"
					)}>{link.name}</a
				>
			</li>
		{/each}
	</ul>
	<ThemeToggle />
</nav>
