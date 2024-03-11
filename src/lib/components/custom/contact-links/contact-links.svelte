<script lang="ts">
	import { buttonVariants } from "@/components/ui/button";
	import { contactLinks } from "./index";
</script>

<div class="flex gap-4 self-end">
	{#each contactLinks as link}
		<a
			class={buttonVariants({ variant: "ghost", size: "icon" })}
			href={link.href}
			target="_blank"
			rel="noreferrer"
		>
			<svelte:component this={link.component} />
		</a>
	{/each}
</div>
