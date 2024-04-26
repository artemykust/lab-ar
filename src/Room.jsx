import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("public/room.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Куб.geometry}
        material={materials["Material.001"]}
        position={[0.764, 3.739, 0.898]}
        scale={[4, 3, 4]}
      />
      <group position={[1.389, 0.794, -2.282]} rotation={[0, 1.571, 0]} scale={2}>
        <group position={[-1.383, 0.67, 0.306]} rotation={[-Math.PI / 2, 0, 1.643]} scale={3.082}>
          <mesh castShadow receiveShadow geometry={nodes.Chair_1.geometry} material={materials["Executive.003"]} />
          <mesh castShadow receiveShadow geometry={nodes.Chair_2.geometry} material={materials["Executive__1.003"]} />
          <mesh castShadow receiveShadow geometry={nodes.Chair_3.geometry} material={materials["Executive__2.003"]} />
          <mesh castShadow receiveShadow geometry={nodes.Chair_4.geometry} material={materials["Executive__3.003"]} />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_mouse.geometry}
          material={materials.ComputerMouse_mat1}
          position={[-0.566, 0.92, 0.91]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={2.93}
        />
        <group position={[-0.111, 0.919, 0.472]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={154.397}>
          <mesh castShadow receiveShadow geometry={nodes.Computer_Screen_1.geometry} material={materials.metalDark} />
          <mesh castShadow receiveShadow geometry={nodes.Computer_Screen_2.geometry} material={materials["metal.002"]} />
        </group>
        <group position={[-0.111, 0.945, 1.079]} rotation={[-Math.PI / 2, 0, 3.106]} scale={[6.489, 9.4, 0.204]}>
          <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials["Material.004"]} />
          <mesh castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={materials["Material.005"]} />
        </group>
        <group position={[-0.094, 1.409, 0.484]} rotation={[0, -1.571, 0]} scale={6.449}>
          <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials["Grey.002"]} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder_2.geometry} material={materials.Dark} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder_3.geometry} material={materials.Blue} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder_4.geometry} material={materials["Material.006"]} />
        </group>
        <group position={[-0.778, 0.916, 0.419]} rotation={[-Math.PI, 1.571, 0]} scale={[9999.999, 9999.997, 9999.997]}>
          <mesh castShadow receiveShadow geometry={nodes["Desk-V86Go2rlnq_1"].geometry} material={materials["DarkWood.012"]} />
          <mesh castShadow receiveShadow geometry={nodes["Desk-V86Go2rlnq_2"].geometry} material={materials["Wood.013"]} />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Keyboard-aPwr5p1dluw"].geometry}
          material={materials["Mat.065"]}
          position={[-0.552, 0.919, 0.416]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.625}
        />
        <group position={[-0.556, 0.009, -0.604]} rotation={[-1.407, 0, -Math.PI]} scale={0}>
          <mesh castShadow receiveShadow geometry={nodes.Laptop_bag_1.geometry} material={materials["02___Default.049"]} />
          <mesh castShadow receiveShadow geometry={nodes.Laptop_bag_2.geometry} material={materials["03___Default.025"]} />
          <mesh castShadow receiveShadow geometry={nodes.Laptop_bag_3.geometry} material={materials["_crayfishdiffuse.049"]} />
          <mesh castShadow receiveShadow geometry={nodes.Laptop_bag_4.geometry} material={materials["_crayfishdiffuse-2.012"]} />
        </group>
        <group position={[-0.135, 1.162, -0.245]} rotation={[-Math.PI / 2, 0, 2.301]} scale={[8561.475, 8561.474, 8561.471]}>
          <mesh castShadow receiveShadow geometry={nodes.Light_Desk_1.geometry} material={materials["Black.097"]} />
          <mesh castShadow receiveShadow geometry={nodes.Light_Desk_2.geometry} material={materials["LightMetal.027"]} />
          <mesh castShadow receiveShadow geometry={nodes.Light_Desk_3.geometry} material={materials["White.053"]} />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mousepad002.geometry}
          material={materials["Mousepad.001"]}
          position={[-0.561, 0.919, 0.771]}
          scale={[1175.398, 15.54, 1430.879]}
        />
        <group position={[-0.328, 0.973, -0.086]} rotation={[Math.PI, 1.424, 0]} scale={626.776}>
          <mesh castShadow receiveShadow geometry={nodes.Office_Phone002_1.geometry} material={materials["Light grey"]} />
          <mesh castShadow receiveShadow geometry={nodes.Office_Phone002_2.geometry} material={materials["Grey Plastic"]} />
          <mesh castShadow receiveShadow geometry={nodes.Office_Phone002_3.geometry} material={materials.Screen} />
          <mesh castShadow receiveShadow geometry={nodes.Office_Phone002_4.geometry} material={materials["Dark Grey Plastic"]} />
        </group>
        <group position={[-0.4, 0.244, -0.257]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.162}>
          <mesh castShadow receiveShadow geometry={nodes.System_unit001_1.geometry} material={materials.lambert3SG} />
          <mesh castShadow receiveShadow geometry={nodes.System_unit001_2.geometry} material={materials.initialShadingGroup} />
        </group>
      </group>
      <group position={[-2.366, 0.936, 0.524]} scale={2}>
        <group position={[0.098, 1.165, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw_1.geometry} material={materials.Metal_1} />
          <mesh castShadow receiveShadow geometry={nodes.Draw_2.geometry} material={materials.Metal_Handle} />
          <mesh castShadow receiveShadow geometry={nodes.Draw_3.geometry} material={materials.Sticker} />
        </group>
        <group position={[0.098, 0.794, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw001_1.geometry} material={materials.Metal_1} />
          <mesh castShadow receiveShadow geometry={nodes.Draw001_2.geometry} material={materials.Metal_Handle} />
          <mesh castShadow receiveShadow geometry={nodes.Draw001_3.geometry} material={materials.Sticker} />
        </group>
        <group position={[0.098, 0.425, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw002_1.geometry} material={materials.Metal_1} />
          <mesh castShadow receiveShadow geometry={nodes.Draw002_2.geometry} material={materials.Metal_Handle} />
          <mesh castShadow receiveShadow geometry={nodes.Draw002_3.geometry} material={materials.Sticker} />
        </group>
        <group position={[0.098, 0.055, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw003_1.geometry} material={materials.Metal_1} />
          <mesh castShadow receiveShadow geometry={nodes.Draw003_2.geometry} material={materials.Metal_Handle} />
          <mesh castShadow receiveShadow geometry={nodes.Draw003_3.geometry} material={materials.Sticker} />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Main_.geometry}
          material={materials.Metal_1}
          position={[0.042, 0.592, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={51.797}
        />
      </group>
      <group position={[-2.366, 0.936, 1.982]} scale={2}>
        <group position={[0.098, 0.055, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw004_1.geometry} material={materials["Metal_1.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw004_2.geometry} material={materials["Metal_Handle.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw004_3.geometry} material={materials["Sticker.001"]} />
        </group>
        <group position={[0.098, 0.425, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw005_1.geometry} material={materials["Metal_1.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw005_2.geometry} material={materials["Metal_Handle.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw005_3.geometry} material={materials["Sticker.001"]} />
        </group>
        <group position={[0.098, 0.794, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw006_1.geometry} material={materials["Metal_1.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw006_2.geometry} material={materials["Metal_Handle.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw006_3.geometry} material={materials["Sticker.001"]} />
        </group>
        <group position={[0.098, 1.165, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={51.797}>
          <mesh castShadow receiveShadow geometry={nodes.Draw007_1.geometry} material={materials["Metal_1.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw007_2.geometry} material={materials["Metal_Handle.001"]} />
          <mesh castShadow receiveShadow geometry={nodes.Draw007_3.geometry} material={materials["Sticker.001"]} />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Main_001.geometry}
          material={materials["Metal_1.001"]}
          position={[0.042, 0.592, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={51.797}
        />
      </group>
      <group position={[2.344, 4.032, -2.387]} scale={0.4}>
        <mesh castShadow receiveShadow geometry={nodes.White_board001_Cube026_1.geometry} material={materials["1A1A1A"]} />
        <mesh castShadow receiveShadow geometry={nodes.White_board001_Cube026_1_1.geometry} material={materials["455A64"]} />
      </group>
      <group position={[2.344, 4.032, -2.387]} scale={0.4}>
        <mesh castShadow receiveShadow geometry={nodes.White_board_Cube045_1.geometry} material={materials.FFFFFF} />
        <mesh castShadow receiveShadow geometry={nodes.White_board_Cube045_1_1.geometry} material={materials.F44336} />
      </group>
      <group position={[-2.066, 0.805, -1.545]} scale={5}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.Houseplant_4_1.geometry} material={materials.Black} />
          <mesh castShadow receiveShadow geometry={nodes.Houseplant_4_2.geometry} material={materials.Brown} />
          <mesh castShadow receiveShadow geometry={nodes.Houseplant_4_3.geometry} material={materials.Plant_Green} />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorway.geometry}
        material={materials.wood}
        position={[-3.038, 0.793, 3.031]}
        rotation={[0, 1.571, 0]}
        scale={[5.076, 4.893, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorway_1.geometry}
        material={materials.wood}
        position={[-3.038, 0.793, 3.031]}
        rotation={[0, 1.571, 0]}
        scale={[5.076, 4.893, 4]}
      />
      <group position={[-3.038, 0.793, 3.031]} rotation={[0, 1.571, 0]} scale={[5.076, 4.893, 4]}>
        <mesh castShadow receiveShadow geometry={nodes.door_1.geometry} material={materials.wood} />
        <mesh castShadow receiveShadow geometry={nodes.door_1_1.geometry} material={materials.metal} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Printer.geometry} material={materials["Material.007"]} scale={100} />
    </group>
  );
}

useGLTF.preload("public/room.glb");
