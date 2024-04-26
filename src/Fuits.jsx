import { useGLTF } from "@react-three/drei";

function Apple(props) {
  const { nodes, materials } = useGLTF("public/Apple.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes["Cube026_Cube-Mesh"].geometry} material={materials.F44336} />
      <mesh castShadow receiveShadow geometry={nodes["Cube026_Cube-Mesh_1"].geometry} material={materials["4CAF50"]} />
      <mesh castShadow receiveShadow geometry={nodes["Cube026_Cube-Mesh_2"].geometry} material={materials["795548"]} />
    </group>
  );
}

function Banana(props) {
  const { nodes, materials } = useGLTF("public/Banana.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.pasted__pCube11_group_1.geometry} material={materials.blinn10SG} />
      <mesh castShadow receiveShadow geometry={nodes.pasted__pCube11_group_1_1.geometry} material={materials.blinn2SG} />
    </group>
  );
}

function Grape(props) {
  const { nodes, materials } = useGLTF("public/Grapes.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes["Icosphere015_Icosphere018-Mesh"].geometry} material={materials["4CAF50"]} />
      <mesh castShadow receiveShadow geometry={nodes["Icosphere015_Icosphere018-Mesh_1"].geometry} material={materials["673AB7"]} />
    </group>
  );
}

function Orange(props) {
  const { nodes, materials } = useGLTF("public/Orange.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.group879198542.geometry} material={materials.mat13} />
      <mesh castShadow receiveShadow geometry={nodes.group589766384.geometry} material={materials.mat9} />
      <mesh castShadow receiveShadow geometry={nodes.group1203776062.geometry} material={materials.mat9} />
    </group>
  );
}

function Pineapple(props) {
  const { nodes, materials } = useGLTF("public/Pineapple.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes["pineapple_Circle004-Mesh"].geometry} material={materials["4CAF50"]} />
      <mesh castShadow receiveShadow geometry={nodes["pineapple_Circle004-Mesh_1"].geometry} material={materials.DD9944} />
    </group>
  );
}

export { Apple, Banana, Orange, Grape, Pineapple };

useGLTF.preload(["public/Pineapple.glb", "public/Orange.glb", "public/Grapes.glb", "public/Banana.glb", "public/Apple.glb"]);
