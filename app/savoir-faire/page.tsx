import Image from "next/image";
import GP1 from '@/public/GP1.webp';
import GP2 from '@/public/GP2.png';
import GP3 from '@/public/GP3.webp';

export default function SavoirFaire() {
    return (
        <main className="flex flex-col bg-genese-ivory items-center justify-center mt-[4%] gap-y-20">
            <section className="py-10 text-center w-full font-lato  ">
                <div className="md:px-[30%] px-6 justify-center items-center flex flex-col  gap-y-7">
                    <h2 className="text-6xl tracking-wide">EL SAVOIR FAIRE DE LA ALTA JOYERÍA</h2>
                    <p className="text-xl tracking-wide">Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL.</p>
                    <Image 
                        src={GP1}
                        alt="Savoir Faire Image 1" 
                        className="w-[500px] h-[500px] object-cover rounded-lg mb-10" 
                    />


                    <h2 className="text-5xl tracking-wide">El Origen del diseño</h2>
                    <p className="text-xl tracking-wide">Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL.</p>
                    <Image 
                        src={GP2}
                        alt="Savoir Faire Image 1" 
                        className="w-full h-full object-cover rounded-lg" 
                    />


                    <h2 className="text-5xl tracking-wide">El Renacer de la artesanía</h2>
                    <p className="text-xl tracking-wide">Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL.</p>
                </div>
                <Image src={GP3} alt="A" className="w-full h-[120vh] object-cover rounded-lg my-10" />

                <div className="md:px-[30%] px-6 justify-center items-center flex flex-col  gap-y-7">
                    <h2 className="text-5xl tracking-wide">Una creación para cada historia</h2>
                    <p className="text-xl tracking-wide">Gabrielle Chanel pasó su vida en el perímetro formado varias calles parisinas: su palacete del 29 rue du Faubourg Saint-Honoré, la boutique del 31 rue Cambon, su suite del hotel Ritz con vistas a Place Vendôme y, en el número 18 de esa misma plaza, el taller CHANEL.</p>
                </div>

                <video 
                    src={"/gold.mp4"} 
                    className="w-full h-[70vh] object-cover rounded-lg my-10"
                    autoPlay
                    loop
                    muted
                />

            </section>
        </main>
    );
}