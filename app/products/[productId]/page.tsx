// components/ScrollSplit.tsx

'use client';

import ScrollSplit from "@/src/components/(ScrollSplit)/ScrollSplit";
import PieceDetails from "@/src/components/PieceDetails";
import TextSalient from "@/src/components/TextSalient";
import TextVideo from "@/src/components/TextVideo";

export default function Page() {
    return (
        <main className="flex flex-col bg-genese-ivory items-center justify-center mt-[4%] gap-y-20">
        <ScrollSplit />

        <PieceDetails />

        <TextSalient />

        <TextVideo />
        </main>
    );
}
