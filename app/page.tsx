
import HeroVideo from '@/src/components/(Home)/Hero'
import SaberMasUnderline from '@/src/components/SaberMasUnderline';

export default function Home() {
  return (
    <main>
      <HeroVideo videoSrc="/hero.mp4" overlay={false}>
        <div className="text-white flex-col flex gap-y-1">
          <h1 className="font-h1 text-5xl uppercase tracking-wide">
            Genèse
          </h1>
            <p className="font-body text-xl pt-2 max-w-[80%] ">Impulsa tu presencia digital desde el primer paso. Impulsa tu presencia digital desde el primer paso</p>
            <div className="flex items-center gap-2 mt-4 w-full">
              <SaberMasUnderline />
            </div>
        </div>
      </HeroVideo>


      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fácil de usar</h3>
              <p>Interfaz intuitiva para una experiencia fluida.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personalización</h3>
              <p>Adapta la plataforma a tus necesidades específicas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Soporte 24/7</h3>
              <p>Asistencia técnica disponible en todo momento.</p>
            </div>
          </div>
        </div>  
      </section>
    </main>
  );
}