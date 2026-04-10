"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function createRoundedRectShape(w: number, h: number, r: number) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;

  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);

  return shape;
}

function Card() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = createRoundedRectShape(3.2 * 0.7, 2 * 0.7, 0.2 * 0.7);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: false,
    });
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({ color: 0x0071e3 }),
    [],
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    meshRef.current.position.x = Math.sin(t * 0.6) * 0.08;
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.06;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.03;
    meshRef.current.rotation.y = Math.cos(t * 0.4) * 0.04;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
    />
  );
}

export default function HeroCard3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Card />
    </Canvas>
  );
}
