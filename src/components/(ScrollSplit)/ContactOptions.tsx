import { Phone, GiftIcon, Crown, Plane } from 'lucide-react';

export default function ContactOptions() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-5'><Phone color='#545454' /><p className='uppercase'>Haz el pedido por teléfono +34 (0)90 0861 891</p></div>
      <div className='flex gap-5'><Crown color='#545454' /><p className='uppercase'>Contacta con un embajador</p></div>
      <div className='flex gap-5'><Plane color='#545454' /><p className='uppercase'>Envío gratuíto</p></div>
      <div className='flex gap-5'><GiftIcon color='#545454' /><p className='uppercase'>Envoltorio exclusivo de Genèse</p></div>

    </div>
  );
}
