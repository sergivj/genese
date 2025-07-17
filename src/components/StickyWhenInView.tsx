'use client';

import { useEffect, useRef, useState } from 'react';

export default function StickyWhenInView({ children }: { children: React.ReactNode }) {

    const [sticky, setSticky] = useState(true);

    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onScroll = () => {
            if (!container.current) return;
            const rect = container.current.getBoundingClientRect();

            // Si el fondo del contenido no cabe en pantalla, desactiva el fixed
            if (rect.bottom <= window.innerHeight) setSticky(false);
            else setSticky(true);
    };

        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div ref={container} className="relative">
        <div
            className={
            sticky
                ? 'fixed top-24 right-[calc(50%*var(--tw-gap)+2rem)] w-[calc(50%-2rem)]'
                : 'absolute bottom-0 left-0 w-full'
            }
        >
            {children}
        </div>
        </div>
    );
    }
