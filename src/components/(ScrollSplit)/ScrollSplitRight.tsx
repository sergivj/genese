/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import EngravingInput from './EngravingInput';
import SizeSelector from './SizeSelector';
import PriceSection from './PriceSection';
import ContactOptions from './ContactOptions';

export default function ScrollSplitRight({
  opacity,
  engravingText,
  setEngravingText,
  editing,
  setEditing,
}: {
  opacity: any;
  engravingText: string;
  setEngravingText: (val: string) => void;
  editing: boolean;
  setEditing: (val: boolean) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const description = `Alianza LOVE, oro amarillo 750/1000, engastada con 88 diamantes talla brillante. 
  Un diseño emblemático, símbolo de amor eterno y pasión, diseñado para ser llevado todos los días 
  como una declaración personal de afecto y compromiso. El cierre con tornillo evoca la fijación eterna del amor.`;

  return (
    <div className="w-1/2 sticky top-0 h-max flex items-start pt-10 justify-center pr-[8%] pl-[1%]">
      <motion.div style={{ opacity }} className="w-3/4 p-8 text-start">
        <h2 className="text-3xl mb-4 font-cormorant font-semibold">Anillo LOVE, tamaño pequeño</h2>

        <AnimatePresence initial={false}>
          <motion.p
            key={expanded ? 'expanded' : 'clamped'}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={` overflow-hidden ${!expanded ? 'line-clamp-3' : ''}`}
          >
            {description}
          </motion.p>
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm mt-2 underline text-genese-dark"
        >
          {expanded ? <p className='text-genese-dark'>Leer menos</p> : <p className='text-genese-dark'>Leer más</p>}
        </button>

        <EngravingInput
          engravingText={engravingText}
          setEngravingText={setEngravingText}
          editing={editing}
          setEditing={setEditing}
        />

        <SizeSelector />
        <PriceSection />
        <ContactOptions />
      </motion.div>
    </div>
  );
}
