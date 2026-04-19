import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post("https://accounts.spotify.com/api/token", async ({ request }) => {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const grantType = params.get("grant_type");

    if (grantType === "authorization_code") {
      return HttpResponse.json({
        access_token: "mock-access-token",
        refresh_token: "mock-refresh-token",
        expires_in: 3600,
        token_type: "Bearer",
      });
    }

    if (grantType === "refresh_token") {
      const refreshToken = params.get("refresh_token");

      if (refreshToken === "invalid-refresh-token") {
        return HttpResponse.json({ error: "invalid_grant" }, { status: 400 });
      }

      return HttpResponse.json({
        access_token: "mock-refreshed-access-token",
        expires_in: 3600,
        token_type: "Bearer",
      });
    }

    return HttpResponse.json({ error: "unsupported_grant_type" }, { status: 400 });
  }),
];
