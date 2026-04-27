<script lang="ts">
	import '../app.css';
	let { children } = $props();

	const title = 'QWF Advisor Brain ... How an organization decides';
	const description =
		"Public home for the QWF Advisor Brain. A collection of choices and the WHY behind each one, so decision-making behavior gets codified. Sister surface to quietlyos.org. Reference implementation maintained by Quietly Working Foundation (501(c)(3)).";
	const url = 'https://brain.quietlyos.org';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{url}/og-image.svg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{url}/og-image.svg" />
	<meta name="theme-color" content="#0a0e14" />
	<link rel="canonical" href={url} />
</svelte:head>

{@render children()}
