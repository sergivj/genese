import { Text } from "@react-three/drei";

export default function RingText({ text }: { text: string }) {
  const radius = 0.028;
  const angleStep = Math.PI / 12;

  return (
    <>
      {text.split("").reverse().map((char, index) => {
        const angle = angleStep * (index - (text.length - 1) / 2);

        const x = -radius * Math.sin(angle);
        const z = -radius * Math.cos(angle);

        return (
          <Text
            key={index}
            position={[x, 0, z + 0.031]}
            rotation={[0, angle, 0]}
            fontSize={0.004}
            anchorX="center"
            anchorY="middle"
            color="#C5A253"
          >
            {char}
          </Text>
        );
      })}
    </>
  );
}
