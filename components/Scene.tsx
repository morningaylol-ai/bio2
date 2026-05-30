"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RoyalOrb() {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.rotation.x = t * 0.18;
    ref.current.rotation.y = t * 0.25;
    ref.current.position.y = Math.sin(t * 0.9) * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={ref} position={[0.8, 0.05, 0]}>
        <icosahedronGeometry args={[0.92, 2]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.18}
          emissive="#241804"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

function CrownRing() {
  return (
    <mesh position={[-1.3, -0.5, -0.7]} rotation={[0.3, 0.2, 0.1]}>
      <torusGeometry args={[0.88, 0.11, 20, 120]} />
      <meshStandardMaterial color="#08080c" metalness={0.95} roughness={0.2} emissive="#5a4a18" emissiveIntensity={0.4} />
    </mesh>
  );
}

export function Scene() {
  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.2], fov: 44 }}>
        <color attach="background" args={["#040406"]} />
        <fog attach="fog" args={["#040406", 6, 16]} />
        <ambientLight intensity={0.38} />
        <directionalLight position={[3, 6, 4]} intensity={2.3} color="#ffd86a" />
        <pointLight position={[-3, -2, 2]} intensity={1.3} color="#8c6b1f" />
        <Stars radius={30} depth={50} count={1400} factor={2.2} saturation={0.25} fade speed={1} />
        <Sparkles count={120} scale={8} size={2.2} speed={0.35} color="#fff1b8" />
        <RoyalOrb />
        <CrownRing />
        <mesh position={[0, -1.8, -1.1]} rotation={[0.15, 0.1, 0]}>
          <planeGeometry args={[14, 5.5, 1, 1]} />
          <meshStandardMaterial color="#09090d" transparent opacity={0.55} metalness={0.3} roughness={0.9} />
        </mesh>
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,4,6,0.15)_58%,rgba(4,4,6,0.82)_100%)]" />
    </div>
  );
}
