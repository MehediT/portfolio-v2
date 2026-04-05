"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

type Tracking = {
  mouseX: number;
  mouseY: number;
  inHero: boolean;
};

function PhoneModel({ tracking }: { tracking: React.MutableRefObject<Tracking> }) {
  const { scene } = useGLTF("/models/iphone_17_pro_max.glb");
  const groupRef = useRef<THREE.Group>(null);
  const baseY = useRef(0);

  useEffect(() => {
    if (!groupRef.current) return;

    scene.rotation.set(0, Math.PI / 2, 0);

    const box = new THREE.Box3().setFromObject(groupRef.current);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = 3.5 / maxDim;

    groupRef.current.scale.setScalar(scaleFactor);
    const cy = -center.y * scaleFactor;
    groupRef.current.position.set(-center.x * scaleFactor, cy, -center.z * scaleFactor);
    baseY.current = cy;
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const { mouseX, mouseY, inHero } = tracking.current;

    if (inHero) {
      // Phone points toward cursor
      const targetY = mouseX * 0.55;
      const targetX = -mouseY * 0.25;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.06);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, baseY.current, 0.06);
    } else {
      // Back to floating animation
      const targetY = Math.sin(t * 0.5) * 0.25;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.03);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.03);
      groupRef.current.position.y = baseY.current + Math.sin(t * 0.8) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function IPhone3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tracking = useRef<Tracking>({ mouseX: 0, mouseY: 0, inHero: true });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Track mouse globally, normalize against the hero section bounds
    const heroSection = container.closest("section") ?? document.documentElement;

    const onMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();
      tracking.current.mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      tracking.current.mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    // Switch to floating when the hero section is less than 40% visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        tracking.current.inHero = entry.isIntersecting;
      },
      { threshold: 0.4 }
    );

    if (heroSection instanceof Element) observer.observe(heroSection);

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
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
          <PhoneModel tracking={tracking} />
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
