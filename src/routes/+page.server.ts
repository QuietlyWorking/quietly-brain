import { prepareMap, type DevMapRaw } from '$lib/brain-development-map';
import type { PageServerLoad } from './$types';

// Intentionally NOT prerendered: prerendered HTML is served directly
// from CF's edge, bypassing hooks.server.ts. That breaks canonical-host
// redirects on www.* / .com hosts. SSR keeps the hook on every request.
//
// BRAIN.development-map.json is imported as a JSON module (Vite treats
// it as structured data; no ?raw needed). prepareMap() runs the
// supporter-anonymity sweep, youth sweep, and em-dash scrub at build
// time so the client receives already-safe data.

import devMapJson from '../../BRAIN.development-map.json';
const devMap = prepareMap(devMapJson as unknown as DevMapRaw);

export const load: PageServerLoad = async () => {
	return { devMap };
};
