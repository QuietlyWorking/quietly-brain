<script lang="ts">
	import OSPlusBrainDiagram from './OSPlusBrainDiagram.svelte';
</script>

<section id="architecture" class="border-t border-border/50 bg-background">
	<div class="mx-auto max-w-5xl px-6 py-24 md:py-32">
		<div
			class="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
		>
			<span class="font-mono">02</span>
			<span>Architecture</span>
		</div>

		<h2 class="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
			OS plus Brain.
			<span class="text-muted-foreground">Wisdom Library is separate.</span>
		</h2>

		<div class="mt-6 max-w-3xl space-y-5 text-lg text-muted-foreground">
			<p>
				The Operating Standard clarifies WHO an organization is. The Brain clarifies HOW it
				decides. The Wisdom Library, a separate artifact, holds what the organization knows.
			</p>
			<p>
				Conflating those three flattens the architecture and the corpus loses precision. The
				distinction is small to read and load-bearing in practice. The Brain reads from the
				Operating Standard for constitutional rules; it reads from the Wisdom Library for
				relevant context; it writes to its own ledger and corpus.
			</p>
		</div>

		<OSPlusBrainDiagram />

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			<div class="rounded-sm border border-border/60 bg-card/20 p-5">
				<h3 class="font-mono text-xs uppercase tracking-wider text-foreground">
					What the Brain reads
				</h3>
				<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
					<li>Constitutional rules from the Operating Standard schemas</li>
					<li>Relevant context from the Wisdom Library</li>
					<li>Precedent: prior decisions, prior verdicts, prior WHYs</li>
				</ul>
			</div>
			<div class="rounded-sm border border-border/60 bg-card/20 p-5">
				<h3 class="font-mono text-xs uppercase tracking-wider text-foreground">
					What the Brain writes
				</h3>
				<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
					<li>New ledger entries with WHY at the moment of choice</li>
					<li>Corpus updates when a verdict adds reinforcement</li>
					<li>Trust meter recalculations per decision category</li>
				</ul>
			</div>
			<div class="rounded-sm border border-border/60 bg-card/20 p-5">
				<h3 class="font-mono text-xs uppercase tracking-wider text-foreground">
					Three weights, three behaviors
				</h3>
				<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
					<li>HARD RULES: constitutional. Never overridden.</li>
					<li>SOFT PREFERENCES: learned. Grow via reinforcement.</li>
					<li>NOVEL: cold-start. Always escalate to the human.</li>
				</ul>
			</div>
		</div>
	</div>
</section>
