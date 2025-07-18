import { ChevronDown } from 'lucide-react';

export default function SizeSelector() {
  return (
    <>
      <div className='mt-10 uppercase flex items-center justify-between border border-black py-1 px-5 mb-2 text-genese-dark'>
        <p></p>
        <p>Elige la talla</p>
        <ChevronDown />
      </div>
      <div className='cursor-pointer pb-1'>Guía de tallas</div>
    </>
  );
}
