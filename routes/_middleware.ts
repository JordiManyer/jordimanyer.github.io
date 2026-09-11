import { define } from "../utils.ts";

const CANONICAL_HOST = "manyer.dev";

// Permanently redirect the Deno-provided hostnames (e.g. *.deno.net) to the
// canonical domain, so search engines only ever see one address.
export default define.middleware((ctx) => {
  const url = new URL(ctx.req.url);
  if (
    url.hostname.endsWith(".deno.net") || url.hostname.endsWith(".deno.dev")
  ) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return ctx.next();
});
