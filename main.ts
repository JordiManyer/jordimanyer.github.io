// Production entrypoint (Deno Deploy runs `main.ts`). The Vite build turns
// app.ts into _fresh/server.js, which only exports `{ fetch }`; this file
// starts the HTTP server around it. Run `deno task build` first.
import server from "./_fresh/server.js";

Deno.serve((req) => server.fetch(req));
