import type { RequestHandler } from "msw";
import { authHandlers } from "./auth";
import { discoverHandlers } from "./discover";
import { resultHandlers } from "./result";
export const handlers: RequestHandler[] = [
  ...authHandlers,
  ...discoverHandlers,
  ...resultHandlers,
];
