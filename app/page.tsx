
import ProductCarousel from '@/src/components/(Carousel)/ProductCarousel';
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
      <div className="min-h-screen bg-genese-ivory">
        <ProductCarousel />
      </div>
      
    </main>
  );
}