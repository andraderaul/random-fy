import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { handleOAuthCallback } from "@/features/auth/handle-callback";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const result = await handleOAuthCallback(code, state);

  if (!result.success) {
    return NextResponse.redirect(new URL(result.redirectTo, request.url));
  }

  redirect("/discover");
}
