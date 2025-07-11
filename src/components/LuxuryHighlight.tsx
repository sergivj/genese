'use client';

// import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
// import { ChevronRight } from 'lucide-react';

export default function LuxuryHighlight() {
  return (
    <div className="flex flex-col md:flex-row h-[80vh] w-full font-cormorant bg-genese-black">
      
        <motion.div className="w-full inset-0 flex items-start justify-center bg-black/10 md:pt-[2.5%] pt-[1%]">
          <motion.h2
            className="text-white text-4xl font-bold flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span>Alta joyería</span>
          </motion.h2>
        </motion.div>
     </div>
  );
}
