import { redirect } from '@sveltejs/kit';
import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

// Canonical-host enforcement.
// SvelteKit owns all routing on CF Pages (its _worker.js intercepts everything
// before Pages Functions run), so functions/_middleware.js is ignored. The
// redirect must live here. Per cloudflare_pages_tool_wisdom.md.
//
// During prerendering, event.url is synthetic and accessing url.search throws.
// Use building to short-circuit.

const CANONICAL_HOST = 'brain.quietlyos.org';

export const handle: Handle = async ({ event, resolve }) => {
	if (building) return resolve(event);

	const host = event.url.hostname;

	if (
		host === CANONICAL_HOST ||
		host.endsWith('.pages.dev') ||
		host === 'localhost' ||
		host === '127.0.0.1'
	) {
		return resolve(event);
	}

	throw redirect(
		301,
		`https://${CANONICAL_HOST}${event.url.pathname}${event.url.search}`
	);
};
