// Wraps "Chaplain TIG" mentions in anchor tags pointing at chaplaintig.com.
// Brain follows the share-not-sell + TIG-personal-toggle disciplines: by
// default supporter-facing prose uses generic phrasing ("decision making
// member or team", "the human in the reinforcement loop"). TIG appears
// only where directly relevant... primarily in dev-map node attribution
// where the build IS by TIG. When he is named there, the link is the
// onboarding ramp for any reader curious about who he is.
//
// Output is HTML; consume with Svelte's {@html ...}.

const TIG_PATTERN = /\bChaplain TIG\b|\bTIG\b/g;

const LINK_CLASSES =
	'text-foreground underline decoration-accent/50 underline-offset-2 hover:decoration-accent';

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function makeAnchor(label: string): string {
	return `<a href="https://chaplaintig.com" target="_blank" rel="noopener noreferrer" class="${LINK_CLASSES}">${label}</a>`;
}

export function linkifyTIG(text: string | undefined | null): string {
	if (!text) return '';
	const escaped = escapeHtml(text);
	return escaped.replace(TIG_PATTERN, (m) => makeAnchor(m));
}

export function linkifyTIGPostEscape(html: string): string {
	if (!html) return '';
	return html.replace(TIG_PATTERN, (m) => makeAnchor(m));
}
