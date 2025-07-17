'use client';

import Image from 'next/image';

const images = [
  '/diamons.png',
  '/A14.png',
  '/A15.png',
  '/A16.png',
  '/A17.png',
];

export default function ProductGallery() {
  return (
    <div className="flex flex-col gap-6">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`img-${i}`}
          width={800}
          height={800}
          className="rounded-md object-cover w-full"
        />
      ))}
    </div>
  );
}
