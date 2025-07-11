'use client';

import Image from 'next/image';
import React from 'react';

export default function LuxuryHighlight() {
  return (
    <section className="bg-black text-white min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-20 py-12">
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
        ALTA JOYERÍA GENESE
      </h2>

      {/* Contenido en columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
        {/* Columna 1 */}
        <div>
          <div className="relative w-full aspect-[4/5] mb-4">
            <Image
              src="/joyas/star_ring.jpg" // reemplaza con tu imagen
              alt="Anillo estrella"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2">Bijoux de Genese</h3>
          <p className="text-sm text-gray-300 mb-4">
            En 2025, Genese revolucionó la Alta Joyería con su colección más audaz e inspiradora.
          </p>
          <a href="#" className="text-sm underline font-semibold hover:text-genese-gold transition">DESCUBRIR</a>
        </div>

        {/* Columna 2 */}
        <div>
          <div className="relative w-full aspect-[4/5] mb-4">
            <Image
              src="/joyas/artisan_hand.jpg" // reemplaza con tu imagen
              alt="Artesanía Genese"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2 italic">
            El savoir-faire de la Alta Joyería Genese
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            La Alta Joyería Genese encarna la técnica y la tradición artesana con precisión atemporal.
          </p>
          <a href="#" className="text-sm underline font-semibold hover:text-genese-gold transition">DESCUBRIR</a>
        </div>
      </div>
    </section>
  );
}
