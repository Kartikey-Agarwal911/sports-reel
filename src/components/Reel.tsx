'use client';

import React, { useEffect, useRef } from 'react';
import { Reel as ReelType } from '@/types';

interface ReelProps {
  reel: ReelType;
  isActive: boolean;
}

export default function Reel({ reel, isActive }: ReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-screen bg-black">
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h2 className="text-white text-xl font-bold">{reel.celebrityName}</h2>
        <p className="text-white/80 mt-2">{reel.script}</p>
      </div>
    </div>
  );
} 