
import ProductCarousel from '@/src/components/(Carousel)/ProductCarousel';
import HeroVideo from '@/src/components/(Home)/Hero'
import SaberMasUnderline from '@/src/components/SaberMasUnderline';
import SideText from '@/src/components/SideText';
// import TwoSides from '@/src/components/TwoSides';
// import GirlRing from '@/public/girl_ring.png';
import GirlRedHair from '@/public/girl_redhair.png';
// import GirlRing2 from '@/public/girl_ring2.png';
import LuxuryHighlight from '@/src/components/LuxuryHighlight';

import A17 from '@/public/A17.png';
import A17ns from '@/public/A17_ns.png';
import P1 from '@/public/P1.png';
import P2 from '@/public/P2.gif';
import P3 from '@/public/P3.png';
import P1ns from '@/public/P1_ns.png';
import P2ns from '@/public/P2_ns.png';
import P3ns from '@/public/P3_ns.png';
import RingViewer from '@/src/components/RingViewer';



export default function Home() {

  const products = [
    {
      id: 1,
      name: 'ANILLO GENESE Nº1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: A17,
      icon: A17ns,
      available: true
    },
    
    {
      id: 3,
      name: 'PULSERA GENESE Nº1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: P1,
      icon: P1ns,
      available: true
    },
    {
      id: 4,
      name: 'PULSERA GENESE Nº2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: P2,
      icon: P2ns,
      available: false
    },
    {
      id: 5,
      name: 'PULSERA GENESE Nº3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: P3,
      icon: P3ns,
      available: false
    },
  ];


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
        <ProductCarousel products={products}/>
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

      <LuxuryHighlight />

      {/* <TwoSides /> */}

      <SideText
        title='Anillo Genese 01011'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        image={GirlRedHair}
      />

      {/* <SideText
        imageDirection='right'
        title='Anillo Genese 01012'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        image={GirlRing2}
      /> */}

    <div className='bg-genese-ivory py-[4%]'>
      <RingViewer />
    </div>
      
    </main>
  );
}