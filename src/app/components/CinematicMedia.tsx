"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type CinematicMediaProps = {
  video?: string;
  poster?: string;
  image?: string;
  alt?: string;
  priority?: boolean;
  position?: string;
  className?: string;
};

export default function CinematicMedia({
  video,
  poster,
  image,
  alt = "",
  priority = false,
  position = "center",
  className = "",
}: CinematicMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = videoRef.current;
    if (!media || !video) return;

    media.muted = true;
    media.defaultMuted = true;

    const startPlayback = () => {
      const playback = media.play();
      if (playback) void playback.catch(() => undefined);
    };

    startPlayback();
    media.addEventListener("loadeddata", startPlayback);
    media.addEventListener("canplay", startPlayback);

    const resumeWhenVisible = () => {
      if (!document.hidden) startPlayback();
    };
    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      media.removeEventListener("loadeddata", startPlayback);
      media.removeEventListener("canplay", startPlayback);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, [video]);

  if (video) {
    return (
      <>
        {poster && (
          <Image
            src={poster}
            alt=""
            fill
            priority={priority}
            className={`cinematic-media cinematic-fallback ${className}`}
            style={{ objectPosition: position }}
            sizes="100vw"
          />
        )}
        <video
          ref={videoRef}
          className={`cinematic-media cinematic-video ${className}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          poster={poster}
          aria-hidden="true"
          tabIndex={-1}
          style={{ objectPosition: position }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </>
    );
  }

  if (!image) return null;

  return (
    <Image
      src={image}
      alt={alt}
      fill
      priority={priority}
      className={`cinematic-media ${className}`}
      style={{ objectPosition: position }}
      sizes="100vw"
    />
  );
}
