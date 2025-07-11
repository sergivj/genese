'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SaberMasUnderline from '../SaberMasUnderline';

const products = [
  {
    id: 1,
    name: 'ANILLO GENESE Nº1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/joyas/a17.png',
    icon: '/joyas/a17_ns.png',
    available: true
  },
  
  {
    id: 3,
    name: 'PULSERA GENESE Nº1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/joyas/p1.png',
    icon: '/joyas/p1_ns.png',
    available: true
  },
  {
    id: 4,
    name: 'PULSERA GENESE Nº2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/joyas/p2.png',
    icon: '/joyas/p2_ns.png',
    available: false
  },
  {
    id: 5,
    name: 'PULSERA GENESE Nº3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/joyas/p3.png',
    icon: '/joyas/p3_ns.png',
    available: false
  },
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = products[activeIndex];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full min-h-screen bg-genese-beige text-genese-dark px-6 md:px-20 md:py-24 md:pt-0 md:pb-0 pt-24 pb-16 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 relative"
    >
      {/* Título fijo superior */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute top-8 md:top-15 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none"
      >
        {/* <h1 className="text-3xl md:text-4xl font-header1 uppercase text-genese-dark font-cormorant">Nuestros Iconos</h1> */}
      </motion.div>

      {/* Info lateral */}
      <div className="max-w-xl w-full flex flex-col items-start text-start">
        <h2 className="text-2xl md:text-4xl font-header1 uppercase mb-4">Nuestros Iconos</h2>
        <p className="text-sm md:text-base font-body mb-6 opacity-70">{active.description}</p>
        <div className='pb-5'>
          <SaberMasUnderline text='Conoce su historia' color='bg-genese-gold' textSize='text-base md:text-lg' textColor='text-genese-gold' />
        </div>

        {/* Miniaturas */}
        <div className="flex gap-3 mt-6 pb-4 overflow-x-scroll scrollbar-hide scrollbar-hide::-webkit-scrollbar w-full pr-4">
          {products.map((product, index) => (
            <button
              key={product.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`transition rounded-full overflow-hidden border-2 min-w-[80px] ${
                index === activeIndex
                  ? 'border-genese-gold scale-100'
                  : `border-gray-300 opacity-60 ${!product.available && 'filter grayscale'} hover:opacity-100 hover:border-genese-gold'}`
              }`}
            >
              <Image
                src={product.icon || product.image}
                alt={product.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Imagen central */}
<div className="w-full max-w-md md:max-w-lg aspect-square relative flex flex-col items-center">
  <div className="w-full h-full relative">
    <AnimatePresence mode="wait">
      <motion.img
        key={active.id}
        src={active.image}
        alt={active.name}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-contain"
      />
    </AnimatePresence>
  </div>

  {/* Nombre y disponibilidad */}
  <h1 className="text-center text-2xl md:text-4xl mt-4 text-genese-gold">{active.name}</h1>
  {!active.available && (
    <p className="text-center text-xs mt-2 text-genese-gold">
      * No disponible por el momento
    </p>
  )}
</div>

    </motion.section>
  );
}
