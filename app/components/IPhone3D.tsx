"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function PhoneModel() {
  const { scene } = useGLTF("/models/iphone_17_pro_max.glb");
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    // Gentle left-right sway on Y axis
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.25;
    // Subtle vertical float
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function IPhone3D() {
  return (
    <div
      className="w-full h-full"
      style={{ minHeight: "480px" }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 40 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-3, 2, -3]} intensity={0.4} color="#cce4ff" />
          <Environment preset="city" />
          <PhoneModel />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.25}
            scale={4}
            blur={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/iphone_17_pro_max.glb");
