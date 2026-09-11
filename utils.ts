import { createDefine } from "fresh";

// Type of `ctx.state`, shared between middlewares, layouts and routes.
// deno-lint-ignore no-empty-interface
export interface State {}

export const define = createDefine<State>();
