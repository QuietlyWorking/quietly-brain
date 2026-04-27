<script lang="ts">
	import ThreeVerdictTable from './ThreeVerdictTable.svelte';
</script>

<section id="how-it-works" class="border-t border-border/50 bg-background">
	<div class="mx-auto max-w-5xl px-6 py-24 md:py-32">
		<div
			class="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
		>
			<span class="font-mono">01</span>
			<span>How it works</span>
		</div>

		<h2 class="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
			One mechanism.
			<span class="text-muted-foreground">Three verdicts.</span>
		</h2>

		<div class="mt-6 max-w-3xl space-y-5 text-lg text-muted-foreground">
			<p>
				Every decision the Brain makes carries a WHY at the moment of choice. Not retroactive.
				Not assembled later. The reasoning is captured in the same breath as the choice it
				explains.
			</p>
			<p>
				At the end of every major session, a decision making member or team reads the report.
				Each call gets one of three verdicts. The corpus updates from each one differently,
				and the trust meter for that decision category moves accordingly.
			</p>
		</div>

		<ThreeVerdictTable />

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			<div class="rounded-sm border border-border/60 bg-card/20 p-5">
				<h3 class="font-mono text-xs uppercase tracking-wider text-foreground">
					Why WHY-at-time-of-decision
				</h3>
				<p class="mt-3 text-sm leading-relaxed text-muted-foreground">
					Retroactive reasoning lets a system rationalize bad choices. WHY captured before
					the choice is committed binds the reasoning to the moment. It is the discipline
					that makes the corpus honest.
				</p>
			</div>
			<div class="rounded-sm border border-border/60 bg-card/20 p-5">
				<h3 class="font-mono text-xs uppercase tracking-wider text-foreground">
					Why a trust meter per category
				</h3>
				<p class="mt-3 text-sm leading-relaxed text-muted-foreground">
					Global agreement-rate hides the categories drifting away from the reviewer's
					actual preferences. Per-category subdivision keeps the calibration honest. A
					category that loses trust re-escalates on its next decision until it rebuilds.
				</p>
			</div>
		</div>
	</div>
</section>
