import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Routes, Route } from "react-router-dom";

import Scene from "./Scene";

import "aframe";
import "ar.js";

const Main = () => {
  return (
    <Canvas shadows camera={{ fov: 70, position: [0, 10, 20] }}>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <Scene />
    </Canvas>
  );
};

const AR = () => {
  return (
    <a-scene embedded arjs>
      <a-marker preset='hiro'>
        <a-entity gltf-model='../public/Apple.glb' scale='0.1 0.1 0.1' position='0 0 0'></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ar' element={<AR />} />
      </Routes>
    </>
  );
};

export default App;
