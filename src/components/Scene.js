import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function App({ top, left }) {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        position: "absolute",
        top: top,
        left: left,
        backgroundColor: "transparent",
        width: "100px",
        height: "100px",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 1]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
