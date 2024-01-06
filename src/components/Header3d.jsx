import { useState, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";

extend({ OrbitControls });
const log = console.log;

export default function H3d(props) {
  return (
    <Canvas className="app-header-h3d pos-abs-0 rad-2x ">
      <ambientLight color="white" intensity={1} />
      <SmoothSphere />
      <Control />
    </Canvas>
  );
}

function Control() {
  /* exp */
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.5}
      rotatespeed={0.35}
    />
  );
}

function SmoothSphere(props) {
  let [active, setActive] = useState(false);
  let smoothSphereRef = useRef(null);

  useFrame((state, delta) => {
    smoothSphereRef.current.rotation.y += delta / 5;
    // log(state)
  });

  return (
    <>
      <mesh
        ref={smoothSphereRef}
        scale={active ? 1.5 : 1}
        onClick={(e) => setActive((a) => !a)}
      >
        <sphereGeometry args={[2, 64]} />
        <meshStandardMaterial color="white" wireframe />
      </mesh>
    </>
  );
}
