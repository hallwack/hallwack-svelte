<script lang="ts">
	import { onMount } from "svelte";
	import { commands } from "./commands";
	import { contactLinks } from "@/components/custom/contact-links";

	let guest = "guest";
	let inputRef: HTMLInputElement;
	let href = "hallwack";
	let inputCmd = "";
	let cmdHistory: string[] = [];
	let cmdIndex: number;
	let content: Node;

	onMount(() => {
		href = window.location.href;
	});

	const clickOutsideNode = (node: HTMLDivElement, ignore?: string) => {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLDivElement;
			if (!event.target || (ignore && target.closest(ignore))) {
				return;
			}

			if (node && !node.contains(target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent("click_outside"));
			}
		};

		document.addEventListener("click", handleClick, true);

		return {
			destroy() {
				document.removeEventListener("click", handleClick, true);
			}
		};
	};

	const newLine = (text: string) => {
		let line = document.createElement("pre");
		line.innerHTML = `${guest}@${href}: $ ${text}`;
		content.appendChild(line);
	};

	const handleOutsideClick = () => {
		inputRef.focus();
	};

	const handleInputChange = (
		event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
	) => {
		if (event.key === "Enter") {
			if (inputCmd !== "" && cmdHistory[cmdHistory.length - 1] !== inputCmd) {
				inputCmd = inputCmd.toLowerCase();
				cmdHistory.push(inputCmd);
			}

			cmdIndex = 0;
			newLine(inputCmd);

			switch (inputCmd) {
				case "help": {
					commands.help.forEach((data) => {
						let line = document.createElement("pre");
						line.innerHTML = `${data.command} -- ${data.output}`;
						content.appendChild(line);
					});
					break;
				}
				case "whoami": {
					let line = document.createElement("pre");
					line.innerHTML = `I am me`;
					content.appendChild(line);
					break;
				}
				case "contacts": {
					contactLinks
						.filter((data) => data.name !== "Github")
						.forEach((data) => {
							let line = document.createElement("pre");
							line.innerHTML = `${data.name} -- <a href="${data.href}" class="underline underline-offset-4" target="_blank" rel="noreferrer">${data.href}</a>`;
							content.appendChild(line);
						});
					break;
				}
						let line = document.createElement("pre");
						line.innerHTML = `${data.command} -- <a href="${data.output}" class="underline underline-offset-4" target="_blank" rel="noreferrer">${data.output}</a>`;
						content.appendChild(line);
					});
					break;
				}
				case "github": {
					let line = document.createElement("pre");
					line.innerHTML = `Redirecting to github.com/hallwack...`;
					content.appendChild(line);
					setTimeout(() => {
						window.open("https://github.com/hallwack", "_blank");
					}, 700);
					break;
				}
				case "clear": {
					let contentDiv = document.getElementById("content");
					while (contentDiv?.firstChild) {
						contentDiv.removeChild(contentDiv.firstChild);
					}
					break;
				}
				case "cls": {
					let contentDiv = document.getElementById("content");
					while (contentDiv?.firstChild) {
						contentDiv.removeChild(contentDiv.firstChild);
					}
					break;
				}
				case "exit": {
					let line = document.createElement("pre");
					line.innerHTML = `Redirecting to UI mode...`;
					content.appendChild(line);
					setTimeout(() => {
						window.open(window.location.origin, "_self");
					}, 700);
					break;
				}
				default: {
					let line = document.createElement("pre");
					line.innerHTML = `${inputCmd}: command not found. Please using "help" command to show all commands.`;
					content.appendChild(line);
					break;
				}
			}

			inputCmd = "";
		}

		if (event.key === "ArrowUp") {
			inputCmd = cmdHistory[cmdHistory.length - 1 - cmdIndex];
			if (cmdIndex < cmdHistory.length - 1) {
				cmdIndex += 1;
			}
		}

		if (event.key === "ArrowDown") {
			inputCmd = cmdHistory[cmdHistory.length - cmdIndex];
			if (cmdIndex > 0) {
				cmdIndex -= 1;
			} else if (cmdIndex == 0) {
				inputCmd = "";
			}
		}
	};
</script>

<div class="container mx-auto min-h-screen max-w-4xl py-16 font-mono">
	<div id="content" bind:this={content} />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="flex"
		use:clickOutsideNode
		on:click={handleOutsideClick}
		on:click_outside={handleOutsideClick}
	>
		<pre>{guest}@{href}: $ </pre>
		<input
			class="flex flex-1 bg-transparent caret-primary outline-none"
			bind:this={inputRef}
			bind:value={inputCmd}
			on:keydown={handleInputChange}
		/>
	</div>
</div>
