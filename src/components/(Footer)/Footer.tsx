'use client';

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Footer() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="absolute bottom-0 left-0 w-full h-full bg-genese-black text-genese-ivory px-6 py-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="text-sm font-light max-w-md leading-relaxed">
          <p>© {new Date().getFullYear()} Genèse.</p>
          <p className="mt-2">Elegancia y esencia que perduran.</p>
        </div>
        <div className="flex gap-6 text-sm uppercase font-medium">
          <a href="#" className="hover:underline">Política</a>
          <a href="#" className="hover:underline">Privacidad</a>
          <a href="#" className="hover:underline">Contacto</a>
        </div>
      </div>
    </motion.footer>
  );
}
