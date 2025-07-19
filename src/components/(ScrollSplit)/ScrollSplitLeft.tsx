'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import RingViewer from '../RingViewer';

const images = ['/diamons.png', '/A14.png', '/A15.png', '/A16.png', '/A17.png', '/P1.png', '/P2.png', '/P3.png', '/savoir.png'];

export default function ScrollSplitLeft({ engravingText }: { engravingText: string }) {
  return (
    <div className="w-1/2">
      <div className="flex flex-col space-y-2 py-20">
        <motion.div key={0} className="w-full h-[50vh] relative bg-white">
          <RingViewer text={engravingText} />
        </motion.div>
        <div className="flex flex-row flex-wrap w-full justify-between">
          {images.slice(1).map((src, index) => (
            <motion.div key={index} className="w-[49.5%] h-64 relative mb-[1%]">
              <Image src={src} alt={`img-${index}`} fill className="object-cover bg-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
