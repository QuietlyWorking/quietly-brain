<script lang="ts">
	// Decorative SVG. role="img" + aria-label gives screen readers the
	// short answer; the surrounding section prose carries the full meaning.
</script>

<figure class="mt-10 rounded-sm border border-border/60 bg-card/20 p-6">
	<svg
		viewBox="0 0 720 320"
		role="img"
		aria-label="Three-box diagram. The Operating Standard box on the left holds schemas for WHO an organization is. The Advisor Brain box in the middle holds choices and the WHY for HOW it decides. The Wisdom Library box on the right holds what the organization knows. The three boxes are distinct artifacts."
		class="h-auto w-full text-foreground"
	>
		<defs>
			<marker
				id="arrow"
				viewBox="0 0 10 10"
				refX="9"
				refY="5"
				markerWidth="7"
				markerHeight="7"
				orient="auto-start-reverse"
			>
				<path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" opacity="0.55" />
			</marker>
		</defs>

		<!-- OS box -->
		<g transform="translate(20, 60)">
			<rect width="200" height="200" rx="8" fill="rgba(13,148,136,0.12)" stroke="rgb(13,148,136)" stroke-width="1.6" />
			<text x="100" y="40" text-anchor="middle" font-family="ui-monospace, Menlo, monospace" font-size="11" fill="rgb(94,234,212)" letter-spacing="2">OPERATING STANDARD</text>
			<text x="100" y="78" text-anchor="middle" font-family="'Source Serif 4', Georgia, serif" font-size="20" fill="currentColor">QOS</text>
			<text x="100" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" fill="currentColor" opacity="0.85">WHO an org is</text>

			<text x="100" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">values . voice . brand</text>
			<text x="100" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">universe . interconnect</text>
			<text x="100" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">content . tools . people</text>
			<text x="100" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.5">quietlyos.org</text>
		</g>

		<!-- Brain box (centered, accent-bordered) -->
		<g transform="translate(260, 40)">
			<rect width="200" height="240" rx="8" fill="rgba(217,167,82,0.10)" stroke="rgb(217,167,82)" stroke-width="2" />
			<text x="100" y="40" text-anchor="middle" font-family="ui-monospace, Menlo, monospace" font-size="11" fill="rgb(251,191,36)" letter-spacing="2">ADVISOR BRAIN</text>
			<text x="100" y="78" text-anchor="middle" font-family="'Source Serif 4', Georgia, serif" font-size="20" fill="currentColor">Brain</text>
			<text x="100" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" fill="currentColor" opacity="0.85">HOW it decides</text>

			<text x="100" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">choices . WHY-at-time</text>
			<text x="100" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">verdicts . reinforcement</text>
			<text x="100" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">trust meter . corpus</text>

			<text x="100" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.5">brain.quietlyos.org</text>

			<g transform="translate(50, 218)" opacity="0.85">
				<circle cx="0" cy="0" r="3" fill="rgb(13,148,136)" />
				<circle cx="50" cy="0" r="3" fill="rgb(13,148,136)" />
				<circle cx="100" cy="0" r="3" fill="rgb(13,148,136)" />
				<circle cx="50" cy="-12" r="3.5" fill="rgb(217,167,82)" />
			</g>
		</g>

		<!-- Wisdom Library box -->
		<g transform="translate(500, 60)">
			<rect width="200" height="200" rx="8" fill="rgba(120,113,198,0.10)" stroke="rgb(167,139,250)" stroke-width="1.6" />
			<text x="100" y="40" text-anchor="middle" font-family="ui-monospace, Menlo, monospace" font-size="11" fill="rgb(196,181,253)" letter-spacing="2">WISDOM LIBRARY</text>
			<text x="100" y="78" text-anchor="middle" font-family="'Source Serif 4', Georgia, serif" font-size="20" fill="currentColor">Wisdom</text>
			<text x="100" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" fill="currentColor" opacity="0.85">what it KNOWS</text>

			<text x="100" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">tool wisdom libraries</text>
			<text x="100" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">captured insights . books</text>
			<text x="100" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.6">articles . concepts</text>
			<text x="100" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="currentColor" opacity="0.5">separate artifact</text>
		</g>

		<!-- Connecting reads (Brain consumes from OS and Wisdom) -->
		<line x1="220" y1="160" x2="260" y2="160" stroke="currentColor" stroke-width="1.4" opacity="0.55" marker-end="url(#arrow)" />
		<line x1="500" y1="160" x2="460" y2="160" stroke="currentColor" stroke-width="1.4" opacity="0.55" marker-end="url(#arrow)" />

		<text x="240" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="currentColor" opacity="0.7">reads</text>
		<text x="480" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="currentColor" opacity="0.7">reads</text>
	</svg>

	<figcaption class="mt-4 text-center text-sm text-muted-foreground">
		Three distinct artifacts. The Brain reads from the Operating Standard (constitutional rules)
		and from the Wisdom Library (relevant context). It does not claim either's territory.
	</figcaption>
</figure>
