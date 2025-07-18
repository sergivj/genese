'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import ScrollSplitLeft from './ScrollSplitLeft';
import ScrollSplitRight from './ScrollSplitRight';

export default function ScrollSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const [engravingText, setEngravingText] = useState('');
  const [editing, setEditing] = useState(false);

  return (
    <div ref={containerRef} className="relative flex w-full min-h-screen bg-genese-ivory pl-[8%] pr-[1%] mt-[4%]">
      <ScrollSplitLeft engravingText={engravingText} />
      <ScrollSplitRight
        opacity={opacity}
        engravingText={engravingText}
        setEngravingText={setEngravingText}
        editing={editing}
        setEditing={setEditing}
      />
    </div>
  );
}
