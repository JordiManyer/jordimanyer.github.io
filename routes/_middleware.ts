import { define } from "../utils.ts";

const CANONICAL_HOST = "manyer.dev";
// Deno-provided production hostname. Preview hostnames are left alone so that
// preview deployments stay viewable.
const DENO_PROD_HOST = "jordimanyer.jmanyer.deno.net";

// Permanently redirect the Deno-provided production hostname to the canonical
// domain, so search engines only ever see one address.
export default define.middleware((ctx) => {
  const url = new URL(ctx.req.url);
  if (url.hostname === DENO_PROD_HOST) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return ctx.next();
});
