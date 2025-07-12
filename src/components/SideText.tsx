'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import GirlRing from '@/public/girl_ring.png';

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const [hasShown, setHasShown] = useState(false);

  // Escuchamos cambios en scrollYProgress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.4) {
      setHasShown(true);
    }
  });

  // Animaciones solo hasta 40%
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.4], [-50, 0]);

  return (
    <div
      ref={ref}
      className={`flex flex-col-reverse md:flex-row bg-genese-ivory ${
        imageDirection === 'right' ? 'md:flex-row-reverse' : ''
      } w-full h-full min-h-full md:min-h-screen font-cormorant`}
    >
      {/* Imagen */}
      <motion.div
        style={hasShown ? { opacity: 1, x: 0 } : { opacity, x }}
        className="relative w-full md:w-1/2 h-64 md:h-auto bg-genese-ivory"
      >
        <Image
          src={image || GirlRing}
          alt="imagen"
          fill
          className="object-cover object-center bg-genese-ivory"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Texto */}
      <div className="relative w-full md:w-1/2 bg-genese-ivory px-6 py-12 md:px-12 md:py-24 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-start text-start gap-6 max-w-2xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
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
