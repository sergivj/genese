'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DrawingOverlay({ image1, image2 }: { image1: string; image2: string }) {
  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
      {/* Imagen base (más abajo, entra desde la derecha) */}
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 200, opacity: 1 }} // 60px = 10% de 600px
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-[0%] left-0 z-10 w-[90%] h-[90%]"
      >
        <Image
          src={image1}
          alt="Base Drawing"
          className="object-contain w-full h-full"
          priority
        />
      </motion.div>

      {/* Imagen superior (más arriba, entra desde la izquierda) */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: -160, opacity: 1 }} // 10% solapamiento desde el otro lado
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="absolute top-[50%] left-0 z-20 w-[100%] h-[100%]"
      >
        <Image
          src={image2}
          alt="Overlay Drawing"
          className="object-contain w-full h-full"
          priority
        />
      </motion.div>
    </div>
  );
}
