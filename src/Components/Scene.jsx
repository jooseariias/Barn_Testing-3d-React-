import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

export default function Scene({ selectedPart, previousPart }) {

  const { scene } = useGLTF("./../public/Barn_Testing.glb");

  const changeColor = (partName, color) => {
    scene.traverse((child) => {
      if (child.isMesh && child.name === partName) {
        const newMaterial = child.material.clone();
        newMaterial.color.set(color);
        child.material = newMaterial;
      }
    });
  };

  useEffect(() => {
    if (previousPart) {
      changeColor(previousPart, "#ffffff");
    }

    if (selectedPart) {
      changeColor(selectedPart, "#ff0000");
    }
  }, [selectedPart, previousPart, scene]);

  return (
    <Canvas
      camera={{ position: [0, 40, 100], fov: 90, near: 0.1, far: 1000 }}
      shadows
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensidad={2} castShadow />
      <Environment preset="sunset" />
      <primitive object={scene} scale={[14, 14, 14]} />
      <OrbitControls enableZoom={true} zoomSpeed={1.2} />
    </Canvas>
  );
}
