<script lang="ts">
	import type { RenderableMap } from '$lib/brain-development-map';
	import BrainBuildMap from './BrainBuildMap.svelte';

	let { map }: { map: RenderableMap } = $props();
</script>

<section id="build-map" class="border-t border-border/50 bg-background">
	<div class="mx-auto max-w-5xl px-6 py-24 md:py-32">
		<div
			class="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
		>
			<span class="font-mono">03</span>
			<span>Build map</span>
		</div>

		<h2 class="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
			Foundations to open standard.
			<span class="text-muted-foreground">Every node in the journey.</span>
		</h2>

		<p class="mt-6 max-w-3xl text-lg text-muted-foreground">
			The Brain map follows the same JSON-source-of-truth, deterministic-renderer,
			drift-validator pattern the Operating Standard uses for its own development map. Reuse,
			not fork.
			<strong class="text-foreground">{map.summary.shipped}</strong> of
			<strong class="text-foreground">{map.summary.total}</strong> nodes shipped
			({map.summary.pct}%).
		</p>

		<BrainBuildMap {map} />
	</div>
</section>
