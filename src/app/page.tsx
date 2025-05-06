'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Reel as ReelType } from '@/types';
import Reel from '@/components/Reel';
import 'swiper/css';

export default function Home() {
  const [reels, setReels] = useState<ReelType[]>([]);
  const [loading, setLoading] = useState(false);

  const generateReel = async (celebrityName: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/reels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ celebrityName }),
      });

      const data = await response.json();
      if (data.success && data.reel) {
        setReels(prev => [data.reel, ...prev]);
      }
    } catch (error) {
      console.error('Error generating reel:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-md mx-auto">
        <div className="p-4">
          <input
            type="text"
            placeholder="Enter celebrity name"
            className="w-full p-2 rounded bg-gray-800 text-white"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                generateReel(e.currentTarget.value);
              }
            }}
          />
        </div>

        {loading && (
          <div className="text-white text-center p-4">
            Generating reel...
          </div>
        )}

        <Swiper
          direction="vertical"
          slidesPerView={1}
          className="h-screen"
        >
          {reels.map((reel) => (
            <SwiperSlide key={reel.id}>
              <Reel reel={reel} isActive={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
} 