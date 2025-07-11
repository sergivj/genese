'use client';

import React from 'react';
import GirlIvory from '@/public/joyas/girl_ivory2.png';
import GirlIvory2 from '@/public/joyas/girl_ivory.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';


export default function TwoSides() {
  return (
    <div className="flex flex-col md:flex-row h-screen font-cormorant">
      {/* Card izquierda */}
      <div className="flex-1 h-96 bg-black md:h-auto relative">
        <Image
          src={GirlIvory}
          alt="black"
          width={500}
          height={500}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-end justify-center bg-black/10 md:pb-[25%] pb-[10%] "
        >
          <motion.h2
            className="text-white text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer md:w-full md:bg-black/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span>Pulsera Genese 01031</span>
            <ChevronRight />
          </motion.h2>
        </motion.div>
      </div>

      {/* Card derecha con animación al entrar en viewport */}
      <div className="flex-1 h-96 bg-black md:h-auto relative">
        <Image
          src={GirlIvory2}
          alt="black"
          width={500}
          height={500}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-end justify-center bg-black/10  md:pb-[25%] pb-[10%]"
        >
          <motion.h2
            className="text-white text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer md:w-full md:bg-black/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span>Pulsera Genese 01032</span>
            <ChevronRight />
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
}
