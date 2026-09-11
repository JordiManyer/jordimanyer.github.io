// Production entrypoint for Deno Deploy. The Vite build emits _fresh/server.js,
// which only exports `{ fetch }` (meant for `deno serve`); this file starts the
// server explicitly so it also works when the platform runs `deno run`.
// The build output is imported by a computed path so `deno check` passes
// before the build has run.
const built = new URL("./_fresh/server.js", import.meta.url).href;
const { default: server } = await import(built);
Deno.serve(server.fetch);
