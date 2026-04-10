"use client";

import { Canvas } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const gradientVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const gradientFragmentShader = `
  varying vec2 vUv;

  void main() {
    vec3 topColor = vec3(0.039, 0.518, 0.969);    // #0A84FF
    vec3 bottomColor = vec3(0.0, 0.443, 0.89);     // #0071E3
    vec3 accentColor = vec3(0.353, 0.784, 0.98);   // #5AC8FA

    vec3 color = mix(bottomColor, topColor, vUv.y);
    color = mix(color, accentColor, smoothstep(0.3, 1.0, vUv.x) * 0.3);

    // Subtle light reflection at top-left
    float highlight = smoothstep(0.6, 1.0, vUv.y) * smoothstep(0.6, 0.0, vUv.x);
    color += vec3(1.0) * highlight * 0.12;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function Card() {
  const meshRef = useRef<THREE.Mesh>(null);

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: gradientVertexShader,
    fragmentShader: gradientFragmentShader,
    side: THREE.DoubleSide,
  });

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[3.2, 2, 0.04]}
      radius={0.03}
      smoothness={4}
      rotation={[0.1, -0.3, 0]}
    >
      <primitive object={shaderMaterial} attach="material" />
    </RoundedBox>
  );
}

export default function HeroCard3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Card />
    </Canvas>
  );
}
