"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/* ─────────────────────────────────────────
   Shaders — gradient bleu + cursor light
───────────────────────────────────────── */
const vertexShader = /* glsl */`
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  void main() {
    vNormal    = normalize(normalMatrix * normal);
    vWorldPos  = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */`
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform vec3 uColor;
  uniform vec3 uCursorPos;

  void main() {
    /* — fresnel : combien la face pointe vers la caméra — */
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float facing = clamp(dot(viewDir, vNormal), 0.0, 1.0);

    /* — gradient : centre = bleu accent, bords = bleu très clair — */
    vec3 edgeColor = mix(uColor, vec3(0.85, 0.92, 1.0), 0.90);
    vec3 base = mix(edgeColor, uColor, pow(facing, 0.55));

    /* — lumière curseur — */
    vec3  toLight   = uCursorPos - vWorldPos;
    float dist      = length(toLight);
    float diffuse   = max(0.0, dot(vNormal, toLight / dist));
    float att       = 1.0 / (1.0 + dist * dist * 0.12);
    vec3  highlight = vec3(0.75, 0.88, 1.0) * diffuse * att * 0.45;

    /* — lumière ambiante douce — */
    vec3 ambient = uColor * 0.12;

    vec3 col = base + highlight + ambient;
    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }
`;

/* ─────────────────────────────────────────
   Factory matériau
───────────────────────────────────────── */
function cubeMat(color: number, cursorPos: THREE.Vector3): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor:     { value: new THREE.Color(color) },
      uCursorPos: { value: cursorPos },          // référence partagée
    },
    vertexShader,
    fragmentShader,
  });
}

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface ShapeDef {
  geo:      THREE.BufferGeometry;
  mat:      THREE.Material;
  pos:      [number, number, number];
  outline?: { color: number; scale: number };
  float: {
    ax: number; fx: number;
    ay: number; fy: number;
    phase: number;
    rx: number; ry: number; rz: number;
  };
}

function f(
  ax: number, fx: number,
  ay: number, fy: number,
  phase: number,
  rx = 0.15, ry = 0.20, rz = 0.05,
): ShapeDef["float"] {
  return { ax, fx, ay, fy, phase, rx, ry, rz };
}

/* ─────────────────────────────────────────
   Shapes
───────────────────────────────────────── */
function useShapes(cursorPos: THREE.Vector3): ShapeDef[] {
  return useMemo(() => {
    // Amplitudes réduits à 0.06 max → pas de chevauchement garanti
    // Positions en grille 3×3 (espacement xy ≥ 1.7) + 3 cubes en arrière-plan profond
    const r = (s: number) => new RoundedBoxGeometry(s, s, s, 4, s * 0.18);
    return [
      /* ── Rangée haute ── */
      { geo: r(0.62), pos: [-1.7,  1.7, -2.0] as [number,number,number], mat: cubeMat(0x0060cc, cursorPos), float: f(0.06, 0.50, 0.05, 0.65,  0.0, 0.12, 0.16, 0.04) },
      { geo: r(0.32), pos: [ 0.2,  1.9, -1.2] as [number,number,number], mat: cubeMat(0x3b9af5, cursorPos), outline: { color: 0x0071e3, scale: 1.12 }, float: f(0.05, 0.75, 0.06, 0.55,  2.8, 0.22, 0.18, 0.09) },
      { geo: r(0.48), pos: [ 1.9,  1.5, -1.8] as [number,number,number], mat: cubeMat(0x0055bb, cursorPos), float: f(0.06, 0.60, 0.05, 0.70,  5.5, 0.18, 0.22, 0.06) },

      /* ── Rangée milieu ── */
      { geo: r(0.72), pos: [-1.8,  0.0, -1.5] as [number,number,number], mat: cubeMat(0x0071e3, cursorPos), float: f(0.06, 0.48, 0.05, 0.62,  1.4, 0.10, 0.14, 0.04) },
      { geo: r(0.55), pos: [ 0.1,  0.0, -2.6] as [number,number,number], mat: cubeMat(0x1a5fb4, cursorPos), outline: { color: 0x5ba3f5, scale: 1.09 }, float: f(0.05, 0.40, 0.05, 0.55,  3.2, 0.10, 0.12, 0.04) },
      { geo: r(0.44), pos: [ 1.8,  0.0, -1.0] as [number,number,number], mat: cubeMat(0x2b7de9, cursorPos), float: f(0.06, 0.58, 0.05, 0.72,  7.8, 0.16, 0.20, 0.06) },

      /* ── Rangée basse ── */
      { geo: r(0.50), pos: [-1.6, -1.7, -1.8] as [number,number,number], mat: cubeMat(0x005bb5, cursorPos), outline: { color: 0x3b82f6, scale: 1.08 }, float: f(0.06, 0.45, 0.05, 0.68,  4.0, 0.12, 0.18, 0.05) },
      { geo: r(0.36), pos: [ 0.3, -1.8, -1.4] as [number,number,number], mat: cubeMat(0x60aaff, cursorPos), float: f(0.05, 0.70, 0.06, 0.80,  9.1, 0.20, 0.26, 0.08) },
      { geo: r(0.42), pos: [ 1.8, -1.6, -2.2] as [number,number,number], mat: cubeMat(0x003d99, cursorPos), float: f(0.06, 0.55, 0.05, 0.62, 11.0, 0.14, 0.18, 0.05) },

      /* ── Arrière-plan profond ── */
      { geo: r(0.65), pos: [-0.8,  0.9, -3.8] as [number,number,number], mat: cubeMat(0x0068d6, cursorPos), float: f(0.04, 0.38, 0.04, 0.50, 13.5, 0.08, 0.12, 0.03) },
      { geo: r(0.38), pos: [ 1.0,  1.1, -4.0] as [number,number,number], mat: cubeMat(0x4d99ff, cursorPos), outline: { color: 0x0071e3, scale: 1.10 }, float: f(0.04, 0.45, 0.04, 0.58, 15.2, 0.10, 0.14, 0.04) },
      { geo: r(0.52), pos: [-0.2, -0.9, -4.2] as [number,number,number], mat: cubeMat(0x0050b0, cursorPos), float: f(0.04, 0.42, 0.04, 0.52, 17.0, 0.08, 0.10, 0.03) },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/* ─────────────────────────────────────────
   Floating shape
───────────────────────────────────────── */
function FloatingShape({ def }: { def: ShapeDef }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() + def.float.phase;
    ref.current.position.x = def.pos[0] + Math.sin(t * def.float.fx) * def.float.ax;
    ref.current.position.y = def.pos[1] + Math.sin(t * def.float.fy) * def.float.ay;
    ref.current.rotation.x += def.float.rx * 0.005;
    ref.current.rotation.y += def.float.ry * 0.005;
    ref.current.rotation.z += def.float.rz * 0.003;
  });

  const outlineMat = useMemo(() => {
    if (!def.outline) return null;
    return new THREE.MeshBasicMaterial({
      color: def.outline.color,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.5,
    });
  }, [def.outline]);

  return (
    <group ref={ref} position={def.pos}>
      <mesh geometry={def.geo} material={def.mat} />
      {def.outline && outlineMat && (
        <mesh geometry={def.geo} material={outlineMat} scale={def.outline.scale} />
      )}
    </group>
  );
}

/* ─────────────────────────────────────────
   Cursor tracker — plan invisible
───────────────────────────────────────── */
function CursorTracker({ cursorPos }: { cursorPos: THREE.Vector3 }) {
  const target = useRef(new THREE.Vector3(0, 0, 1.5));

  useFrame(() => {
    cursorPos.lerp(target.current, 0.10);
  });

  return (
    <mesh
      position={[0, 0, 1.5]}
      onPointerMove={(e) => target.current.set(e.point.x, e.point.y, 1.5)}
    >
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial visible={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ─────────────────────────────────────────
   Scene
───────────────────────────────────────── */
function Scene() {
  const cursorPos = useMemo(() => new THREE.Vector3(0, 0, 1.5), []);
  const shapes    = useShapes(cursorPos);

  return (
    <>
      <CursorTracker cursorPos={cursorPos} />
      {shapes.map((def, i) => <FloatingShape key={i} def={def} />)}
    </>
  );
}

/* ─────────────────────────────────────────
   Export
───────────────────────────────────────── */
export default function HeroScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 55, far: 20 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <Scene />
    </Canvas>
  );
}
