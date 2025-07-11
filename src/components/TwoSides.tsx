'use client';

import React from 'react';
import GirlIvory from '@/public/girl_ivory2.png';
import GirlIvory2 from '@/public/girl_ivory.png';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';


interface TwoSidesProps {
  image1?: string | StaticImageData;
  image2?: string | StaticImageData;
  title1?: string;
  title2?: string;
}

export default function TwoSides({image1, image2, title1, title2}: TwoSidesProps) {
  return (
    <div className="flex flex-col md:flex-row h-screen font-cormorant bg-genese-beige">
      {/* Card izquierda */}
      <motion.div
        className="flex-1 h-96  md:h-auto relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={image1 || GirlIvory}
          alt="Pulsera Genese 01031"
          fill
          className="object-cover"
        />
        {title1 && (
          <motion.div className="absolute inset-0 flex items-end justify-center bg-black/10 md:pb-[25%] pb-[10%]">
            <motion.h2
              className="text-white text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer md:w-full md:bg-black/60"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span>{title1}</span>
              <ChevronRight />
            </motion.h2>
          </motion.div>
        )}
      </motion.div>

      {/* Card derecha */}
      <motion.div
        className="flex-1 h-96 bg-black md:h-auto relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={image2 || GirlIvory2}
          alt="Pulsera Genese 01032"
          fill
          className="object-cover"
        />
        {title2 && (
          <motion.div className="absolute inset-0 flex items-end justify-center bg-black/10 md:pb-[25%] pb-[10%]">
            <motion.h2
              className="text-white text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer md:w-full md:bg-black/60"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span>{title2}</span>
              <ChevronRight />
            </motion.h2>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
