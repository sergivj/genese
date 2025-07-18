"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RingModel from "./RingModel";
import RingText from "./RingText";


export default function RingViewer({text}: { text: string }) {
  return (
    <>
      <div className="w-full h-[500px]">
        <Canvas camera={{ position: [0, 0, 2], fov: 3 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} />
          <RingModel />
          <RingText text={text} />
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.6} />
        </Canvas>
      </div>
    </>
  );
}
