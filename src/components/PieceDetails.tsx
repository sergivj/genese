'use client';

import Image from 'next/image';

export default function PieceDetails() {
  return (
    <section className="py-10 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-semibold tracking-wide uppercase">Detalles de la pieza</h2>
      <p className="uppercase mt-2 underline underline-offset-4 text-sm tracking-wide">Consejos de mantenimiento</p>

      <div className="mt-12 flex flex-col md:flex-row justify-between gap-10">
        {/* Diamantes */}
        <div className="flex-1 flex flex-col items-start text-start">
          <div className="relative h-56 w-[400px]">
            <Image
              src="/diamons.png"
              alt="Diamante"
              fill
              className="rounded-md object-cover w-full"
            />
          </div>
          <h3 className="mt-4 font-semibold uppercase text-lg tracking-widest">Diamantes</h3>
          <p className="text-lg mt-2">
            24 diamantes talla brillante con un total de 0,39 quilate<br />
            Las características de cada pieza pueden variar**
          </p>
        </div>

        {/* Material */}
        <div className="flex-1 flex flex-col items-start text-start">
          <div className="relative  h-56 w-[400px]">
            <Image
              src="/diamons.png"
              alt="Oro amarillo"
              fill
              className="rounded-md object-cover w-full"
            />
          </div>
          <h3 className="mt-4 font-semibold uppercase text-lg tracking-widest">Material</h3>
          <p className="text-lg mt-2">Oro amarillo de 18 quilates</p>
        </div>
      </div>
    </section>
  );
}
