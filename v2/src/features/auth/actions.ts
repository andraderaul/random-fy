"use server";

import { redirect } from "next/navigation";
import { clearTokens } from "./cookies";

export async function logoutAction(): Promise<void> {
  await clearTokens();
  redirect("/login");
}
