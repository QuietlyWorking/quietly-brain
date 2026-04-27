<script lang="ts">
	import DecisionLedgerView from './DecisionLedgerView.svelte';
	import TrustMeterChart from './TrustMeterChart.svelte';
	import NamedPreferenceList from './NamedPreferenceList.svelte';
</script>

<section id="whats-next" class="border-t border-border/50 bg-background">
	<div class="mx-auto max-w-5xl px-6 py-24 md:py-32">
		<div
			class="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
		>
			<span class="font-mono">04</span>
			<span>What goes here next</span>
		</div>

		<h2 class="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
			Honest about today.
			<span class="text-muted-foreground">Naming what is coming.</span>
		</h2>

		<div class="mt-6 max-w-3xl space-y-5 text-lg text-muted-foreground">
			<p>
				Phase 0 ships the foundation. The Brain runtime, the live ledger, the trust meters,
				and the named-preferences corpus are all downstream. Each lights up at its own phase
				and gets its own surface here.
			</p>
			<p>
				The placeholders below name the coming surfaces and the phase that ships them. No
				mocked data. The page tells the truth about today.
			</p>
		</div>

		<div class="mt-10 space-y-8">
			<div>
				<div
					class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-foreground"
				>
					<h3 class="font-serif text-xl">Live Decisions</h3>
					<span
						class="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
						>Phase 2 . anonymized ledger entries</span
					>
				</div>
				<DecisionLedgerView />
			</div>

			<div>
				<div
					class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-foreground"
				>
					<h3 class="font-serif text-xl">Trust Meters</h3>
					<span
						class="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
						>Phase 3 . per-category agreement rate</span
					>
				</div>
				<TrustMeterChart />
			</div>

			<div>
				<div
					class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-foreground"
				>
					<h3 class="font-serif text-xl">Named Preferences</h3>
					<span
						class="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
						>Phase 3 . corpus entries with reinforcement history</span
					>
				</div>
				<NamedPreferenceList />
			</div>
		</div>
	</div>
</section>
