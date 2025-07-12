'use client';

import { useLoader } from '@react-three/fiber';
import { MTLLoader, OBJLoader } from 'three-stdlib';

export default function RingModel() {
  const materials = useLoader(MTLLoader, '/13506_Diamond_Ring_v1_l3.mtl');
  console.log(materials)
  const obj = useLoader(OBJLoader, '/13506_Diamond_Ring_v1_l3.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={0.02} />;
}
