<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border/60 bg-background">
	<div class="mx-auto max-w-5xl px-6 py-14">
		<div class="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
			<div>
				<div class="flex items-center gap-3">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-card"
					>
						<svg
							viewBox="0 0 32 32"
							class="h-4 w-4 text-primary"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<circle cx="16" cy="16" r="11" opacity="0.6" />
							<circle cx="16" cy="6.5" r="2.4" fill="currentColor" />
							<circle cx="7.5" cy="20.5" r="2.4" fill="currentColor" />
							<circle cx="24.5" cy="20.5" r="2.4" fill="currentColor" />
							<circle cx="16" cy="16" r="2.4" fill="rgb(217 167 82)" />
						</svg>
					</div>
					<span class="font-serif text-lg text-foreground">QWF Advisor Brain</span>
				</div>
				<p class="mt-4 max-w-sm text-sm text-muted-foreground">
					A reference implementation maintained by Quietly Working Foundation (501(c)(3)).
					Sister surface to <a
						class="text-foreground/90 underline decoration-accent/40 underline-offset-2 hover:text-foreground"
						href="https://quietlyos.org"
						target="_blank"
						rel="noopener noreferrer">quietlyos.org</a
					>.
				</p>
			</div>

			<div>
				<h3
					class="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
				>
					Foundation
				</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							class="text-foreground/90 hover:text-foreground"
							href="https://www.quietlyworking.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							quietlyworking.org
						</a>
					</li>
					<li>
						<a
							class="text-foreground/90 hover:text-foreground"
							href="https://transparency.quietlyworking.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Transparency
						</a>
					</li>
					<li>
						<a
							class="text-foreground/90 hover:text-foreground"
							href="https://chaplaintig.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Chaplain TIG
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h3
					class="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
				>
					Standard
				</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							class="text-foreground/90 hover:text-foreground"
							href="https://quietlyos.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							quietlyos.org
						</a>
					</li>
					<li>
						<a
							class="text-foreground/90 hover:text-foreground"
							href="https://github.com/QuietlyWorking/quietly-brain"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</li>
					<li>
						<a class="text-foreground/90 hover:text-foreground" href="#build-map"
							>Build Map</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3
					class="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
				>
					System
				</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							class="text-foreground/90 hover:text-foreground"
							href="https://status.quietlyworking.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Status
						</a>
					</li>
					<li>
						<a
							class="text-foreground/90 hover:text-foreground"
							href="mailto:support@quietlyworking.org"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="mt-12 flex flex-col gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
		>
			<span>&copy; {year} Quietly Working Foundation. All rights reserved.</span>
			<span class="font-mono">brain.quietlyos.org . v0.1.0</span>
		</div>
	</div>
</footer>
