// Production entrypoint for Deno Deploy. The Vite build emits _fresh/server.js,
// which only exports `{ fetch }` (meant for `deno serve`); this file starts the
// server explicitly so it also works when the platform runs `deno run`.
// If loading the app fails, the server still starts and reports the error, so
// boot failures are visible instead of failing the deployment silently.
console.log(`[serve] booting on Deno ${Deno.version.deno}`);

let handler: (req: Request) => Response | Promise<Response>;
try {
  const { default: server } = await import("./_fresh/server.js");
  handler = (req) => server.fetch(req);
  console.log("[serve] app loaded");
} catch (err) {
  console.error("[serve] failed to load app:", err);
  const detail = err instanceof Error ? err.stack ?? err.message : String(err);
  handler = () => new Response(`Boot error\n\n${detail}`, { status: 500 });
}

Deno.serve(handler);
