/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";

export default function FullImage({ src, alt, className }: { src: any; alt: string; className: string }) {
  return <Image src={src} alt={alt} className={className} />;
}
