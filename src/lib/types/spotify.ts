export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  spotifyUrl: string;
  popularity: number;
  genres: string[];
}

export interface Track {
  id: string;
  name: string;
  previewUrl: string | null;
  spotifyUrl: string;
  albumImageUrl: string;
}

export interface LikedPair {
  artistId: string;
  trackId: string;
}

export interface ResultSearchParams {
  liked?: string;
  albums?: string;
}

export interface CollageItem {
  id: string;
  imageUrl: string;
  artistName: string;
}
