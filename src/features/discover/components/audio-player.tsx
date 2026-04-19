"use client";

import { useRef, useState } from "react";

import { PauseIcon, PlayIcon } from "@/components/icons";

let currentAudio: HTMLAudioElement | null = null;

const controlButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md shadow-md transition-colors hover:enabled:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50";

interface AudioPlayerProps {
  previewUrl: string | null;
  className?: string;
}

export function AudioPlayer({ previewUrl, className = "" }: AudioPlayerProps) {
  const controlClass = `${controlButtonClass} ${className}`.trim();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  if (!previewUrl) {
    return (
      <button
        type="button"
        disabled
        aria-label="Preview not available"
        className={controlClass}
      >
        <PlayIcon size={18} />
      </button>
    );
  }

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
    <>
      <audio ref={audioRef} src={previewUrl} onEnded={handleEnded} />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause preview" : "Play preview"}
        className={controlClass}
      >
        {playing ? <PauseIcon size={18} /> : <PlayIcon size={18} />}
      </button>
    </>
  );
}
