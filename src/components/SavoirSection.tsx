/* eslint-disable @typescript-eslint/no-explicit-any */


import Image from "next/image";
import DrawingOverlay from "./DrawingOverlay";

interface SavoirSectionProps {
  title: string;
  text: string;
  image?: any;
  image2?: any;
  imageClassName?: string;
  spacing?: string;
  overlay?: boolean;
}

export default function SavoirSection({
  title,
  text,
  image,
  image2,
  imageClassName,
  spacing = "pb-10",
  overlay=false
}: SavoirSectionProps) {
  return (
    <>
      <div className={`flex flex-col items-center gap-y-20 ${spacing}`}>
        <h2 className="text-6xl tracking-wide max-w-[60%]">{title}</h2>
        <p className="text-xl tracking-wide">{text}</p>
      </div>
      {!overlay && image && (
        <Image src={image} alt={title} className={imageClassName} />
      )}
      {overlay && (
        <DrawingOverlay image1={image} image2={image2}/>
      )}
    </>
  );
}
