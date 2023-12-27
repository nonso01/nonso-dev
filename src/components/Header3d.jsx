import { useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

export default function H3d({}) {
  return (
    <Canvas className="app-header-h3d pos-abs-0 rad-2x">
      <B />
    </Canvas>
  );
}

function B() {
  // B here, stands forr the 3d scene and whatever we have in it.
  let [active, setActive] = useState(false);
  let meshRef = useRef(null);

  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive((a) => !a)}
    >
      <boxGeometry args={[2, 2, 2, 16, 16, 16]} />
      <meshNormalMaterial wireframe={true} />
    </mesh>
  );
}
