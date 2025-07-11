'use client';

import React from 'react';
import GirlRing from '@/public/joyas/girl_ring.png';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface SideTextProps {
  imageDirection?: 'left' | 'right';
  title?: string;
  description?: string;
  image?: StaticImageData | string;
}

export default function SideText({
  imageDirection = 'left',
  title,
  description,
  image,
}: SideTextProps) {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${
        imageDirection === 'right' ? 'md:flex-row-reverse' : ''
      } w-full h-full min-h-full md:min-h-screen font-cormorant`}
    >
      {/* Imagen */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src={image || GirlRing}
          alt="imagen"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Texto */}
      <div className="relative w-full md:w-1/2 bg-genese-ivory px-6 py-12 md:px-12 md:py-24 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-start text-start gap-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1 className="text-genese-dark text-2xl md:text-4xl font-bold">
            {title}
          </motion.h1>
          <motion.p className="text-genese-dark text-lg md:text-xl font-medium">
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
