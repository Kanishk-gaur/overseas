"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Sphere } from "@react-three/drei";
import { countries } from "@/data/countries";

const RADIUS = 1.6;

// Lays pins out on the globe's front-facing side in an even sunflower-spiral
// pattern (golden-angle spacing) so every pin is visible at once, clearly
// separated, without depending on real-world lat/lon clustering.
function frontFacingSpreadPositions(count, capAngleDeg = 78) {
  const capAngle = (capAngleDeg * Math.PI) / 180;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return Array.from({ length: count }, (_, i) => {
    const zFrac = count === 1 ? 0 : i / (count - 1);
    const theta = Math.acos(1 - zFrac * (1 - Math.cos(capAngle)));
    const phi = i * goldenAngle;
    return [Math.sin(theta) * Math.cos(phi), Math.sin(theta) * Math.sin(phi), Math.cos(theta)];
  });
}

function Pin({ country, position: unitPosition }) {
  const [hovered, setHovered] = useState(false);
  const radius = RADIUS + 0.02;
  const position = unitPosition.map((v) => v * radius);

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color="#c8952c" />
      </mesh>
      <Html distanceFactor={6} occlude zIndexRange={[100, 0]}>
        <a
          href="/#countries"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`pointer-events-auto flex items-center whitespace-nowrap rounded-full bg-white/95 shadow-lg transition-all ${
            hovered ? "gap-1.5 px-2.5 py-1 text-xs font-semibold text-navy" : "h-6 w-6 justify-center text-sm"
          }`}
        >
          <span>{country.flag}</span>
          {hovered && <span>{country.name}</span>}
        </a>
      </Html>
    </group>
  );
}

const pinPositions = frontFacingSpreadPositions(countries.length);

function RotatingGlobe() {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      <Sphere args={[RADIUS, 48, 48]}>
        <meshBasicMaterial color="#0b2545" wireframe transparent opacity={0.55} />
      </Sphere>
      <Sphere args={[RADIUS - 0.02, 32, 32]}>
        <meshBasicMaterial color="#0b1220" transparent opacity={0.85} />
      </Sphere>
      {countries.map((c, i) => (
        <Pin key={c.slug} country={c} position={pinPositions[i]} />
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.2} />
      <RotatingGlobe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}
