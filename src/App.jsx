import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Scene from "./Scene";
import ARComponent from "./ar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <Canvas shadows camera={{ fov: 70, position: [0, 10, 20] }}>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={0.2} />
      <Scene />
    </Canvas>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ar' element={<ARComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
