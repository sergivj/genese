// components/ScrollSplit.tsx

'use client';

import ScrollSplit from "@/src/components/(ScrollSplit)/ScrollSplit";

export default function Page() {
    return (
        <main className="flex flex-col bg-genese-ivory items-center justify-center mt-[4%]">
        <ScrollSplit />

        <div>
            <h2 className="text-2xl font-bold text-center mt-8 uppercase"> 
                Detalles de la limpieza
            </h2>
        </div>
        </main>
    );
}
