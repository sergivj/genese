'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function PriceSection({selectedSize, setIsOpen}: {selectedSize: string | null, setIsOpen: (val: boolean) => void}) {
  const [clicked, setClicked] = useState(false);
  const [clickedError, setClickedError] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000); // reinicia animación opcional
    // aquí puedes añadir lógica para añadir a la cesta
  };

  const handleClickError = () => {
    setClickedError(true);
    setTimeout(() => setClickedError(false), 1000); // reinicia animación opcional
    setIsOpen(true);
  }

  return (
    <>
      <div className='flex gap-x-1 items-end my-5'>
        <p className='text-2xl font-bold'>€8500</p>
        <p>incl. IVA</p>
      </div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={selectedSize ? handleClick : handleClickError}
        className={`uppercase flex items-center justify-center mt-4 py-2 px-5 mb-5 bg-black text-genese-ivory cursor-pointer transition-all duration-300 ${selectedSize ? 'opacity-100 bg-black' : 'bg-black opacity-50 cursor-not-allowed disabled'} ${clickedError ? 'bg-red-500' : ''}`}
      >
        <motion.p
          key={clicked ? 'clicked' : 'default'}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {(clicked || clickedError) ? clicked ? <Check /> : <X /> : 'Añadir a la cesta'}
        </motion.p>
      </motion.div>
    </>
  );
}
