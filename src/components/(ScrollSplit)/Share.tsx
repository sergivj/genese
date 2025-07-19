'use client';

import { Share2 } from 'lucide-react';

export default function Share() {
  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: '¡Echa un vistazo a este producto!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles');
      }
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  return (
    <div className='flex flex-row items-center justify-start gap-6 mt-10'>
      <button onClick={handleShare} className='flex items-center gap-2 cursor-pointer'>
        <Share2 color='#545454' />
        <p className='uppercase'>Compartir</p>
      </button>

      <div className='h-6 border-l border-[0.1px] border-gray-300'></div>

      <div className='flex gap-2'>
        <p>Ref. 01341</p>
      </div>
    </div>
  );
}
