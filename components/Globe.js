"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Sphere } from "@react-three/drei";
import { countries } from "@/data/countries";

const RADIUS = 1.6;

function latLongToVector3(lat, lon, radius) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

function Pin({ country }) {
  const [hovered, setHovered] = useState(false);
  const position = latLongToVector3(country.lat, country.lon, RADIUS + 0.02);

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color="#c8952c" />
      </mesh>
      <Html distanceFactor={6} occlude zIndexRange={[100, 0]}>
        <a
          href={`/countries/${country.slug}`}
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
      {countries.map((c) => (
        <Pin key={c.slug} country={c} />
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
        autoRotate
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}
