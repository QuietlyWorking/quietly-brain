<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Architecture from '$lib/components/Architecture.svelte';
	import BuildMap from '$lib/components/BuildMap.svelte';
	import WhatGoesHereNext from '$lib/components/WhatGoesHereNext.svelte';
	import OpenStandard from '$lib/components/OpenStandard.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	let { data } = $props();
</script>

<Hero />
<HowItWorks />
<Architecture />
<BuildMap map={data.devMap} />
<WhatGoesHereNext />
<OpenStandard />
<SiteFooter />
