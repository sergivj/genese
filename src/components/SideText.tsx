'use client';

import React from 'react';
import GirlRing from '@/public/joyas/girl_ring.png';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { desc } from 'framer-motion/client';

interface SideTextProps {
  imageDirection?: 'left' | 'right';
  title?: string;
  description?: string;
  image?: StaticImageData | string;
}

export default function SideText({imageDirection = 'left', title, description, image}: SideTextProps) {
  return (
    <div className="flex flex-col md:flex-row h-screen font-cormorant">
      <div className={` h-96 bg-black md:h-auto relative ${imageDirection === 'left' ? 'flex-1' : 'hidden'}`}>
        <Image
          src={image || GirlRing}
          alt="black"
          width={500}
          height={500}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Card derecha con animación al entrar en viewport */}
      <div className="flex-1 h-96 bg-genese-ivory md:h-auto relative">
      <motion.div
          className="absolute inset-0 flex flex-col gap-5 items-center justify-center  "
        >
          <motion.h1
            className="text-genese-dark text-2xl font-bold flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className=''>{title}</span>
          </motion.h1>

          <motion.p
            className="text-genese-dark text-lg font-bold flex items-center justify-center gap-2 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Genera Lorem Ipsum */}
            <span className=''>{description} </span>
          </motion.p>
        </motion.div>
      </div>


      <div className={` h-96 bg-black md:h-auto relative ${imageDirection === 'right' ? 'flex-1' : 'hidden'}`}>
        <Image
          src={image || GirlRing}
          alt="black"
          width={500}
          height={500}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
