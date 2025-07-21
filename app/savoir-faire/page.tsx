// app/savoir-faire/page.tsx
'use client';
import GP1 from '@/public/GP1.webp';
import GP3 from '@/public/GP3.webp';
import GP4 from '@/public/GP4.png';
import GP5 from '@/public/GP5.png';
import SavoirSection from "@/src/components/SavoirSection";
import FullImage from "@/src/components/FullImage";
import FinalSection from "@/src/components/FinalSection";
import VideoSection from "@/src/components/VideoSection";

import { motion } from 'framer-motion';


export default function SavoirFaire() {
    return (
        <main className="flex flex-col bg-genese-ivory items-center justify-center mt-[4%] gap-y-20">
            <section className="py-10 mt-30 text-center w-full flex flex-col justify-center items-center">
                <div className="md:px-[15%] px-6 justify-center items-center flex flex-col gap-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='flex flex-col items-center text-center gap-y-12'
                    >
                        <SavoirSection
                            title="EL SAVOIR FAIRE DE LA ALTA JOYERÍA"
                            text="Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL."
                            image={GP1}
                            imageClassName="w-[500px] h-[500px] object-cover mb-10"
                        />
                    </motion.div>
                    <motion.div
                        className='flex flex-col items-center text-center gap-y-12 mb-[40%]'
                    >
                    <SavoirSection
                        title="El Origen del diseño"
                        text="Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL."
                        image={GP5}
                        image2={GP4}
                        overlay={true}
                        imageClassName="w-full h-full object-cover"
                        spacing="py-10"
                    />
                    </motion.div>


                    
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='flex flex-col items-center text-center gap-y-12 mb-[10%]'
                    >
                    <SavoirSection
                        title="El Renacer de la joyería"
                        text="Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL."
                        imageClassName="w-full h-full object-cover"
                        spacing="py-10"
                    />
                    </motion.div>
                </div>

                <FullImage
                    src={GP3}
                    alt="A"
                    className="w-[95%] h-[120vh] object-cover object-top my-10"
                />

                <FinalSection
                    title="Una creación para cada historia"
                    text="Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL."
                />

                <VideoSection src="/gold.mp4" />
            </section>
        </main>
    );
}