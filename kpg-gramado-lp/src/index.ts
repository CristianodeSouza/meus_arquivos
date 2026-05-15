export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		// API routes
		switch (url.pathname) {
			case '/message':
				return new Response('Hello, World!');
			case '/random':
				return new Response(crypto.randomUUID());
		}

		// Serve static assets from public/ folder
		try {
			const response = await env.ASSETS.fetch(request);
			if (response.status !== 404) {
				return response;
			}
		} catch (error) {
			console.error('Asset fetch error:', error);
		}

		// Fallback to index.html for SPA routing
		const indexUrl = new URL('/', request.url);
		return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
	},
} satisfies ExportedHandler<Env>;
