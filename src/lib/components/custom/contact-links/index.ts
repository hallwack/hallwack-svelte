import { LinkedinLogo, FigmaLogo, GithubLogo, InstagramLogo, EnvelopeClosed } from "svelte-radix";

export const contactLinks = [
	{
		name: "Linkedin",
		component: LinkedinLogo,
		href: "https://www.linkedin.com/in/raihan-adam-4011ba1b9"
	},
	{ name: "Figma", component: FigmaLogo, href: "https://www.figma.com/@raihanadam" },
	{ name: "Github", component: GithubLogo, href: "https://github.com/hallwack" },
	{ name: "Instagram", component: InstagramLogo, href: "https://instagram.com/raihanadamstagram" },
	{ name: "E-Mail", component: EnvelopeClosed, href: "mailto:hallwack.id@gmail.com" }
];
