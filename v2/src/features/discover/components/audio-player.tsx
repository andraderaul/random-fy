"use client";

import { useRef, useState } from "react";

import { PauseIcon, PlayIcon } from "@/components/icons";

let currentAudio: HTMLAudioElement | null = null;

interface AudioPlayerProps {
  previewUrl: string;
}

export function AudioPlayer({ previewUrl }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = audio;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }

  function handleEnded() {
    setPlaying(false);
    currentAudio = null;
  }

  return (
    <div className="shrink-0">
      <audio ref={audioRef} src={previewUrl} onEnded={handleEnded} />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause preview" : "Play preview"}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-80 transition-opacity"
      >
        {playing ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
      </button>
    </div>
  );
}
