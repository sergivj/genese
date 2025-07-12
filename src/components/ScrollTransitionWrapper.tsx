'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SideText from './SideText';
import PreFooter from './PreFooter';
import GirlRedHair from '@/public/girl_redhair.png';

export default function ScrollTakeover() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Zona total de scroll: 1vh para mostrar SideText, +1vh de transición, +1vh para PreFooter
  // const totalSections = 3; // ajusta para más tiempo fijo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // FASE 1: SideText visible (0 → 0.33), desaparece en 0.33 → 0.5
  const sideTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const sideTextY = useTransform(scrollYProgress, [0.33, 0.5], ['0%', '-10%']);

  // FASE 2: PreFooter entra (0.33 → 0.5), permanece hasta 0.83
  const preFooterOpacity = useTransform(scrollYProgress, [0.33, 0.5], [0, 1]);
  const preFooterY = useTransform(scrollYProgress, [0.33, 0.5], ['10%', '0%']);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-genese-ivory">
      {/* Bloque sticky donde ocurre la transición */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Primer componente (SideText) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ opacity: sideTextOpacity, y: sideTextY }}
        >
          <SideText
            title="Anillo Genese 01011"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            image={GirlRedHair}
          />
        </motion.div>

        {/* Segundo componente (PreFooter) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ opacity: preFooterOpacity, y: preFooterY }}
        >
          <PreFooter />
        </motion.div>
      </div>

      {/* Contenido que viene después */}
      <div className="h-[100vh] flex items-center justify-center text-xl text-gray-500">
      </div>
    </div>
  );
}
