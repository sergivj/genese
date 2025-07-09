'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SaberMasUnderline({
  text = 'Descubre el primer lanzamiento de Genèse', 
  color = 'bg-genese-ivory', 
  textSize = 'text-xl',
  textColor = 'text-genese-ivory',
}: {
  text?: string, 
  color?: string, 
  textSize?: string
  textColor?: string
}) {
  const [showLine, setShowLine] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLine(false);
      setTimeout(() => {
        setDirection((prev) => (prev === 'left' ? 'right' : 'left'));
        setShowLine(true);
      }, 200); // pequeño reset para reiniciar animación
    }, 4000); // cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-start items-center pt-2 gap-1 cursor-pointer relative w-max">
      <p className={`font-body ${textSize} ${textColor} pt-4 w-full pb-1`}>{text}</p>

      {/* Línea animada */}
      <AnimatePresence mode="wait">
        {showLine && (
          <motion.div
            key={direction}
            initial={{ scaleX: 0, originX: direction === 'left' ? 0 : 1 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`absolute bottom-0 left-0 w-[100%] h-[2px] ${color}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
