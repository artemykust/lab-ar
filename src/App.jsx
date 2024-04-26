import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Scene from "./Scene";

const App = () => {
  return (
    <Canvas shadows camera={{ fov: 70, position: [0, 10, 20] }}>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <Scene />
    </Canvas>
  );
};

export default App;
