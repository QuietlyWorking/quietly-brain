<script lang="ts">
	// Phase 2 stub. The decision-ledger view renders anonymized ledger
	// entries (non-technical description first, choice, WHY, verdict, date)
	// once the Brain runtime ships and the first overnight run produces
	// real entries. Today this component is a placeholder so the
	// component inventory stays honest about what is built and what is
	// coming.

	let { entries = [] }: { entries?: unknown[] } = $props();
</script>

<div
	class="rounded-sm border border-dashed border-border/70 bg-card/20 p-5 text-sm text-muted-foreground"
>
	<strong class="font-mono text-xs uppercase tracking-wider text-foreground"
		>Phase 2 placeholder</strong
	>
	<p class="mt-2">
		This is where anonymized decision-ledger entries will render. Each entry leads with a
		non-technical description, then surfaces the choice, the WHY at the moment of decision, the
		verdict, and the date. Three sweeps (supporter, youth, TIG-personal) run at render time.
		Lights up in Phase 2, once the Brain runtime ships.
	</p>
	{#if entries && entries.length > 0}
		<p class="mt-2 text-xs">
			(Entries provided: {entries.length}. Renderer not yet implemented.)
		</p>
	{/if}
</div>
