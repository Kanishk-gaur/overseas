"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Sphere } from "@react-three/drei";
import { countries } from "@/data/countries";

const RADIUS = 1.6;

function latLongToVector3(lat, lon, radius = 1) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

function normalize([x, y, z]) {
  const len = Math.hypot(x, y, z) || 1;
  return [x / len, y / len, z / len];
}

// Nudges pins apart on the sphere surface so clustered countries (e.g. the
// several close together in Europe) don't overlap, while isolated pins stay
// near their real lat/lon.
function relaxPinPositions(list, { iterations = 400, minAngleDeg = 24, strength = 0.05 } = {}) {
  const positions = list.map((c) => normalize(latLongToVector3(c.lat, c.lon)));
  const minAngle = (minAngleDeg * Math.PI) / 180;

  for (let iter = 0; iter < iterations; iter++) {
    const forces = positions.map(() => [0, 0, 0]);

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const [ax, ay, az] = positions[i];
        const [bx, by, bz] = positions[j];
        const dot = Math.min(1, Math.max(-1, ax * bx + ay * by + az * bz));
        const angle = Math.acos(dot);
        if (angle > 1e-6 && angle < minAngle) {
          const diff = [ax - bx, ay - by, az - bz];
          const diffLen = Math.hypot(...diff) || 1e-6;
          const push = ((minAngle - angle) / minAngle) * strength;
          const dir = diff.map((v) => (v / diffLen) * push);
          forces[i] = forces[i].map((v, k) => v + dir[k]);
          forces[j] = forces[j].map((v, k) => v - dir[k]);
        }
      }
    }

    for (let i = 0; i < positions.length; i++) {
      positions[i] = normalize(positions[i].map((v, k) => v + forces[i][k]));
    }
  }

  return positions;
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

const pinPositions = relaxPinPositions(countries);

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
