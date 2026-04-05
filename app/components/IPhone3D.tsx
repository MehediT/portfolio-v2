"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function PhoneModel() {
  const { scene } = useGLTF("/models/iphone_17_pro_max.glb");
  const groupRef = useRef<THREE.Group>(null);
  const baseY = useRef(0);

  // Auto-fit: correct orientation first, then scale/center to fill the view
  useEffect(() => {
    if (!groupRef.current) return;

    // Rotate the scene so the phone face points toward the camera (+Z)
    scene.rotation.set(0, Math.PI / 2, 0);

    const box = new THREE.Box3().setFromObject(groupRef.current);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = 3.5;
    const scaleFactor = targetSize / maxDim;

    groupRef.current.scale.setScalar(scaleFactor);
    const cy = -center.y * scaleFactor;
    groupRef.current.position.set(-center.x * scaleFactor, cy, -center.z * scaleFactor);
    baseY.current = cy;
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    // Gentle left-right sway on Y axis
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.25;
    // Subtle vertical float around centered base
    groupRef.current.position.y = baseY.current + Math.sin(t * 0.8) * 0.08;
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
      className="absolute inset-0"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
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
