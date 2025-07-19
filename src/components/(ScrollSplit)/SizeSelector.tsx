'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

const sizes = ['10', '11', '12', '13', '14', '15', '16', '17'];

export default function SizeSelector({selectedSize, setSelectedSize, isOpen=false, setIsOpen}: {selectedSize: string | null, setSelectedSize: (val: string) => void, isOpen: boolean, setIsOpen: (val: boolean) => void}) {
  
  const [showModal, setShowModal] = useState(false);

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
    setIsOpen(false);
  };

  return (
    <>
      {/* Selector */}
      <div
        className='mt-5 uppercase flex items-center justify-between border border-black py-2 px-5 mb-2 text-genese-dark cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{selectedSize ? `Talla: ${selectedSize}` : 'Elige la talla'}</p>
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='border border-black px-5 py-2 mb-2'
          >
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => handleSelectSize(size)}
                className='py-1 cursor-pointer hover:underline uppercase text-sm'
              >
                {size}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guía de tallas */}
      <div className='cursor-pointer underline text-sm' onClick={() => setShowModal(true)}>
        Guía de tallas
      </div>

      {/* Modal animado */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Contenido del modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white p-6 rounded-md max-w-md w-full relative shadow-xl">
                <button className="absolute top-3 right-3" onClick={() => setShowModal(false)}>
                  <X />
                </button>
                <h2 className="text-xl font-semibold mb-4">Guía de tallas</h2>
                <p className="text-sm">
                  Aquí puedes incluir una imagen, tabla o explicación sobre cómo elegir tu talla ideal.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
