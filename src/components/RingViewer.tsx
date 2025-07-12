'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RingModel from './RingModel';

export default function RingViewer() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [2, 2, 2], fov: 2 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} />
        <RingModel />
        <OrbitControls
          enableZoom={false}   // 👈 esto desactiva el zoom con scroll
          enablePan={false}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
