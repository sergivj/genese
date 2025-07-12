'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LuxuryHighlight() {
  return (
    <div className="flex flex-col w-full font-cormorant bg-genese-ivory">
      <motion.div className="w-full items-start justify-center  md:py-[2.5%] py-[1%]">
        <motion.h2
          className="text-genese-gold text-4xl  flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className='uppercase'>Alta joyería</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="w-full items-start justify-center "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="gap-10 w-full flex flex-col md:flex-row justify-center items-start px-6 md:px-20 py-4 pb-[5%]">
          {/* Columna 1 */}
          <div className="w-full md:w-[400px]">
            <div className="relative w-full h-[500px] mb-4 overflow-hidden">
              <Image
                src="/diamons.png"
                alt="Anillo estrella"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl uppercase mb-2 text-genese-dark">Bijoux de Genese</h3>
            <p className="text-xl text-genese-dark mb-4">
              En 2025, Genese revolucionó la Alta Joyería con su colección más audaz e inspiradora.
            </p>
            <a href="#" className="text-sm underline hover:text-genese-gold transition text-genese-gold">DESCUBRIR</a>
          </div>

          {/* Columna 2 */}
          <div className="w-full md:w-[400px]">
            <div className="relative w-full h-[500px] mb-4 overflow-hidden">
              <Image
                src="/key-hands.png"
                alt="Artesanía Genese"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl uppercase mb-2 text-genese-dark">
              El <span className='italic'>savoir-faire</span>
            </h3>
            <p className="text-xl  mb-4 text-genese-dark">
              La Alta Joyería Genese encarna la técnica y la tradición artesana con precisión atemporal.
            </p>
            <a href="#" className="text-sm underline hover:text-genese-gold transition text-genese-gold">DESCUBRIR</a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
