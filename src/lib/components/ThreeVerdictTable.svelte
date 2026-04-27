<script lang="ts">
	const verdicts = [
		{
			id: 'approved',
			label: 'Approved',
			tag: 'silent',
			tagColor: 'verdict-tag-approved',
			corpus: 'No update. The original WHY was correct.',
			trust: 'Ticks up for that decision category.',
			when:
				'Reviewer reads the WHY at moment of decision and accepts. The choice and the reasoning matched the established pattern.'
		},
		{
			id: 'approved-plus',
			label: 'Approved + Reinforcement',
			tag: 'with WHY',
			tagColor: 'verdict-tag-reinforcement',
			corpus:
				'Corpus appends the strengthening context. A named preference may emerge if the pattern repeats.',
			trust: 'Ticks up. The category becomes safer to handle autonomously.',
			when:
				'Reviewer accepts AND adds context that strengthens the pattern. The reasoning was right; now it is also more durable.'
		},
		{
			id: 'redirected',
			label: 'Redirected + Reinforcement',
			tag: 'with WHY',
			tagColor: 'verdict-tag-redirect',
			corpus: "Corpus rewrites with the reviewer's WHY. The rule changes for next time.",
			trust:
				'Ticks down. The category re-escalates on similar future decisions until trust rebuilds.',
			when:
				'Reviewer disagrees and explains why. The redirect is itself reinforcement. Teaching, not punishment.'
		}
	];
</script>

<div class="mt-10 overflow-hidden rounded-sm border border-border/70 bg-card/30">
	<div class="grid grid-cols-1 md:grid-cols-3">
		{#each verdicts as v (v.id)}
			<div
				class="border-border/50 p-6 not-last:border-b md:not-last:border-b-0 md:not-last:border-r"
			>
				<div class="flex flex-wrap items-center gap-2">
					<h3 class="font-serif text-xl text-foreground">{v.label}</h3>
					<span class="verdict-tag {v.tagColor}">{v.tag}</span>
				</div>
				<p class="mt-3 text-sm leading-relaxed text-muted-foreground">{v.when}</p>

				<dl class="mt-5 space-y-3 text-sm">
					<div>
						<dt
							class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
						>
							Corpus effect
						</dt>
						<dd class="mt-1 text-foreground/90">{v.corpus}</dd>
					</div>
					<div>
						<dt
							class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
						>
							Trust meter effect
						</dt>
						<dd class="mt-1 text-foreground/90">{v.trust}</dd>
					</div>
				</dl>
			</div>
		{/each}
	</div>
</div>

<p class="mt-6 max-w-3xl text-sm text-muted-foreground">
	The 'plus Reinforcement' on both Approved and Redirected is intentional. A redirect with a
	written WHY is reinforcement; the corpus learns from the correction the same way it learns
	from a strengthened approval. The reviewer is the teacher, not the gate.
</p>

<style>
	.verdict-tag {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
		font-size: 0.6875rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		padding: 0.18rem 0.5rem;
		border-radius: 2px;
		text-transform: lowercase;
	}
	.verdict-tag-approved {
		background-color: rgb(16 185 129 / 0.15);
		color: rgb(52 211 153);
	}
	.verdict-tag-reinforcement {
		background-color: rgb(217 167 82 / 0.18);
		color: rgb(251 191 36);
	}
	.verdict-tag-redirect {
		background-color: rgb(120 113 198 / 0.2);
		color: rgb(167 139 250);
	}
	:global(.not-last\:border-b:not(:last-child)) {
		border-bottom-width: 1px;
	}
	:global(.not-last\:border-r:not(:last-child)) {
		border-right-width: 1px;
	}
</style>
