
import ProductCarousel from '@/src/components/(Carousel)/ProductCarousel';
import HeroVideo from '@/src/components/(Home)/Hero'
import SaberMasUnderline from '@/src/components/SaberMasUnderline';
import SideText from '@/src/components/SideText';
// import TwoSides from '@/src/components/TwoSides';
import GirlRing from '@/public/joyas/girl_ring.png';
// import GirlRing2 from '@/public/joyas/girl_ring2.png';
// import LuxuryHighlight from '@/src/components/LuxuryHighlight';


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

      <HeroVideo videoSrc="/third.mp4" overlay={false}>
        <div className="text-white flex-col flex gap-y-1">
          <h1 className="font-h1 text-5xl uppercase tracking-wide">
            Una evolución audaz
          </h1>
            <p className="font-body text-xl pt-2 max-w-[40%] ">Una joya que trasciende el paso del tiempo y las tendencias. Descubra el espíritu innovador con miras al futuro de la emblemática colección de joyas de Genese</p>
            <div className="flex items-center gap-2 mt-4 w-full">
              <SaberMasUnderline text='Descubre la nueva colección' />
            </div>
        </div>
      </HeroVideo>

      {/* <LuxuryHighlight /> */}

      {/* <TwoSides /> */}

      <SideText
        title='Anillo Genese 01011'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        image={GirlRing}
      />

      {/* <SideText
        imageDirection='right'
        title='Anillo Genese 01012'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        image={GirlRing2}
      /> */}
      
    </main>
  );
}