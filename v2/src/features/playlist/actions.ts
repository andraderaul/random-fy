"use server";

import { getAccessToken } from "@/features/auth/cookies";
import { getUserProfile } from "@/features/result/queries/get-user-profile";
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

    const user = await getUserProfile();
    return await createPlaylist(user.id, trackIds);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return { error: message };
  }
}
