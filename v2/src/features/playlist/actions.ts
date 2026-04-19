"use server";

import { getAccessToken } from "@/features/auth";
import { getUserProfile } from "./queries/get-user-profile";
import { createPlaylist } from "./mutations/create-playlist";
import type { Playlist } from "./types";

export async function createPlaylistAction(
  trackIds: string[],
): Promise<Playlist | { error: string }> {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return { error: "Not authenticated" };
    }

    const user = await getUserProfile(accessToken);
    return await createPlaylist(user.id, trackIds, accessToken);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return { error: message };
  }
}
