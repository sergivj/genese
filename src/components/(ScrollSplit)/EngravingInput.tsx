/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { PenLine, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function EngravingInput({ engravingText, setEngravingText, editing, setEditing }: any) {
  return (
    <div
      className="flex border-[0.5px] w-full gap-2 mt-5 items-center justify-between px-[5%] gap-x-[5%] cursor-pointer"
      onClick={() => !editing && setEditing(true)}
    >
      <div className="flex items-center justify-start gap-x-[5%] w-full">
        <motion.div
          animate={editing ? { rotate: [0, -5, 5, -5, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <PenLine color='#545454' />
        </motion.div>

        <div className="flex items-start justify-center flex-col w-full">
          <div className="text-genese-dark px-2 pt-1 uppercase">AÑADIR GRABADO</div>

          <AnimatePresence mode="wait">
            {editing ? (
              <motion.input
                key="input"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                autoFocus
                type="text"
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                onBlur={() => setEditing(false)}
                placeholder="Escribe tu grabado"
                className="bg-transparent text-sm w-full px-2 pb-1 outline-none"
                maxLength={5}
              />
            ) : (
              <motion.div
                key="label"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="text-genese-dark px-2 pb-1"
              >
                {engravingText || <div className='border-b-[0.5px] border-black w-[15vh] h-3 mb-2'></div>}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {!editing && (
          <motion.div
            key="chevron"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
