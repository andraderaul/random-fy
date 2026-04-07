import type { RequestHandler } from "msw";
import { authHandlers } from "./auth";
import { discoverHandlers } from "./discover";
import { resultHandlers } from "./result";
import { searchHandlers } from "./search";

export const handlers: RequestHandler[] = [...authHandlers, ...discoverHandlers, ...resultHandlers, ...searchHandlers];
