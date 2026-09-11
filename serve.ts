// Production entrypoint for Deno Deploy. The Vite build emits _fresh/server.js,
// which only exports `{ fetch }` (meant for `deno serve`); this file starts the
// server explicitly so it also works when the platform runs `deno run`.
// The import is static so dependency caching can follow it (run the build
// before `deno check`).
import server from "./_fresh/server.js";

Deno.serve(server.fetch);
