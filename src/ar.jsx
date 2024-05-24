import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

import { Apple } from "./Fuits";

const ARComponent = () => {
  const handleWindowResize = gl => {
    const onResize = () => {
      gl.setSize(window.innerWidth, window.innerHeight);
      gl.setPixelRatio(window.devicePixelRatio);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  };

  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
        gl.setPixelRatio(window.devicePixelRatio);
        handleWindowResize(gl);
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 0]} />
      <ARMarker type='pattern' patternUrl='/public/data/hiro.patt'>
        <Apple />
      </ARMarker>
    </ARCanvas>
  );
};

export default ARComponent;
