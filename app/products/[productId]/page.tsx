    // components/ScrollSplit.tsx

    'use client';

    import { useRef } from 'react';
    import { motion, useScroll, useTransform } from 'framer-motion';
    import Image from 'next/image';
    import { ChevronDown, Headset, Phone, Store } from 'lucide-react';

    const images = [
        '/diamons.png',
        '/A14.png',
        '/A15.png',
        '/A16.png',
        '/A17.png',
    ];

    export default function ScrollSplit() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

    // Puedes usar esto si quieres animar algo con scrollYProgress
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (
        <div ref={containerRef} className="relative flex w-full min-h-screen bg-genese-ivory pl-[8%] pr-[1%] mt-[4%]">
        {/* Columna Izquierda */}
        <div className="w-1/2">
            <div className="flex flex-col space-y-2 py-20">
            <motion.div key={0} className="w-full h-[80vh] relative">
                <Image src={images[0]} alt={`img-${0}`} fill className="object-cover" />
            </motion.div>
            <div className='flex flex-row flex-wrap w-full justify-between'>
            {images.slice(1).map((src, index) => (
                <motion.div key={index} className="w-[49.5%] h-64 relative mb-[1%]">
                <Image src={src} alt={`img-${index}`} fill className="object-cover bg-white" />
                </motion.div>
            ))}
            </div>
            </div>
        </div>

        {/* Columna Derecha Sticky */}
        <div className="w-1/2 sticky top-0 h-max flex items-start pt-10 justify-center pr-[8%] pl-[1%]">
            <motion.div style={{ opacity }} className="w-3/4 p-8 text-start">
            <h2 className="text-3xl mb-4 font-cormorant font-semibold">Anillo LOVE, tamaño pequeño </h2>
            <p className="text-gray-600">Alianza LOVE, oro amarillo 750/1000, engastada con 88 diamantes talla brillante con un total de 0,31 quilates. Ancho: 4 mm a 5 mm, según las tallas (para la talla...)</p>
            <div className=' mt-10 uppercase flex items-center justify-between border border-black py-1 px-5 mb-2 text-genese-dark'>
                <p></p>
                <p>Elige la talla</p>
                <ChevronDown />
            </div>
            <div className=' cursor-pointer pb-1'>Guia de tallas</div>
            
            <div className='flex gap-x-1 items-end mb-10'>
                
                <p className='text-2xl text-bold'>€8500</p>
                <p>incl. IVA</p>
            </div>

            <div className='uppercase flex items-center justify-center mt-4 py-1 px-5  mb-5 hover:cursor-pointer bg-black text-genese-ivory'>
                <p>Añadir a la cesta</p>
            </div>

            <div className='flex flex-col gap-6'>
                <div className='flex gap-5'>
                    <Phone />
                    <p className='uppercase'>Haz el pedido por teléfono +34 (0)90 0861 891</p>
                </div>
                <div className='flex gap-5'>
                    <Store />
                    <p className='uppercase'>Buscar en boutique</p>
                </div>
                <div className='flex gap-5'>
                    <Headset />
                    <p className='uppercase'>Contacta con un embajador</p>
                </div>
                <div className='flex gap-5'>
                    <Store />
                    <p className='uppercase'>Cita en la boutique</p>
                </div>
            </div>
            </motion.div>
        </div>
        </div>
    );
    }
