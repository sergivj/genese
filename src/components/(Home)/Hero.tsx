'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface HeroVideoProps {
  videoSrc: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function HeroVideo({ videoSrc, overlay = true, children }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && video.paused) {
          video.play().catch((err) => {
            console.warn('❌ No se pudo reproducir:', err);
          });
          setIsPaused(false);
        } else if (!entry.isIntersecting && !video.paused) {
          video.pause();
          setIsPaused(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Capa oscura opcional */}
      {overlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
      )}

      {/* Contenido principal */}
      <div className="relative z-20 flex items-end left-[5%] bottom-[10%] justify-start h-full text-start">
        {children}
      </div>

      {/* Botón de pausa/reanudar */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-md transition"
        aria-label={isPaused ? 'Reanudar video' : 'Pausar video'}
      >
        {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
      </button>
    </section>
  );
}
