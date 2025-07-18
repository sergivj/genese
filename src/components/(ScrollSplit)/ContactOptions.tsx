import { Phone, Store, Headset } from 'lucide-react';

export default function ContactOptions() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-5'><Phone /><p className='uppercase'>Haz el pedido por teléfono +34 (0)90 0861 891</p></div>
      <div className='flex gap-5'><Store /><p className='uppercase'>Buscar en boutique</p></div>
      <div className='flex gap-5'><Headset /><p className='uppercase'>Contacta con un embajador</p></div>
      <div className='flex gap-5'><Store /><p className='uppercase'>Cita en la boutique</p></div>
    </div>
  );
}
