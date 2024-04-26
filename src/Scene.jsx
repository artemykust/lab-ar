import { Suspense } from "react";

import { Room } from "./Room.jsx";
import { Pineapple } from "./Fuits.jsx";

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Room />
    </Suspense>
  );
}
