"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ── Card dimensions ── */
const CW = 3.2 * 0.7; // 2.24
const CH = 2 * 0.7;   // 1.40

/* ── Rounded rect shape for card extrusion ── */
function createRoundedRectShape(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);      s.quadraticCurveTo(x + w, y,     x + w, y + r);
  s.lineTo(x + w, y + h - r);  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);      s.quadraticCurveTo(x,     y + h, x,     y + h - r);
  s.lineTo(x, y + r);          s.quadraticCurveTo(x,     y,     x + r, y);
  return s;
}

/* ── Card mesh ── */
function Card() {
  const groupRef = useRef<THREE.Group>(null);

  const cardGeo = useMemo(() => {
    const shape = createRoundedRectShape(CW, CH, 0.2 * 0.7);
    return new THREE.ExtrudeGeometry(shape, { depth: 0.02, bevelEnabled: false });
  }, []);

  const cardMat = useMemo(() => new THREE.MeshBasicMaterial({ color: 0x0071e3 }), []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.x = Math.sin(t * 0.6) * 0.08;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.06;
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.03;
    groupRef.current.rotation.y = Math.cos(t * 0.4) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={cardGeo} material={cardMat} />
    </group>
  );
}

export default function HeroCard3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: false }}
      scene={{ background: new THREE.Color(0x000000) }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <Card />
    </Canvas>
  );
}
