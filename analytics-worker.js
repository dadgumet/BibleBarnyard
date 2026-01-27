// analytics-worker.js
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Only accept POST requests for analytics
        if (request.method !== 'POST') {
            return new Response('Method not allowed', { status: 405 });
        }

        try {
            const data = await request.json();
            const { action, file } = data;

            // Validate required fields
            if (!action || !file) {
                return new Response('Missing action or file', { status: 400 });
            }

            // Valid actions: 'play', 'download'
            const validActions = ['play', 'download'];
            if (!validActions.includes(action)) {
                return new Response('Invalid action', { status: 400 });
            }

            // Get current date for daily stats
            const now = new Date();
            const dateKey = now.toISOString().split('T')[0]; // YYYY-MM-DD
            const hour = now.getHours();

            // Create keys for KV storage
            const dailyKey = `stats:daily:${dateKey}`;
            const fileKey = `stats:file:${file}`;
            const actionKey = `stats:action:${action}:${dateKey}`;
            const hourlyKey = `stats:hourly:${dateKey}:${hour}`;

            // Use Promise.all to increment all counters atomically
            await Promise.all([
                env.ANALYTICS_STATS.put(dailyKey,
                    (parseInt(await env.ANALYTICS_STATS.get(dailyKey)) || 0) + 1
                ),
                env.ANALYTICS_STATS.put(fileKey,
                    (parseInt(await env.ANALYTICS_STATS.get(fileKey)) || 0) + 1
                ),
                env.ANALYTICS_STATS.put(actionKey,
                    (parseInt(await env.ANALYTICS_STATS.get(actionKey)) || 0) + 1
                ),
                env.ANALYTICS_STATS.put(hourlyKey,
                    (parseInt(await env.ANALYTICS_STATS.get(hourlyKey)) || 0) + 1
                )
            ]);

            return new Response(JSON.stringify({ success: true }), {
                headers: { 'Content-Type': 'application/json' },
            });

        } catch (error) {
            console.error('Analytics error:', error);
            return new Response('Internal server error', { status: 500 });
        }
    },

    // Scheduled function to clean up old data (optional)
    async scheduled(event, env, ctx) {
        // Clean up data older than 90 days
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

        const keys = await env.ANALYTICS_STATS.list();

        for (const key of keys.keys) {
            if (key.name.startsWith('stats:daily:')) {
                const dateStr = key.name.replace('stats:daily:', '');
                const date = new Date(dateStr);

                if (date < ninetyDaysAgo) {
                    await env.ANALYTICS_STATS.delete(key.name);
                }
            }
        }
    }
}