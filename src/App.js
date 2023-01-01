import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef, useMemo, Suspense } from "react";
import { Canvas, extend, useFrame, useThree, useLoader } from "react-three-fiber";
import { BufferAttribute, MeshPhysicalMaterial } from "three";
import * as THREE from "three";

extend({ OrbitControls });
const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};
const Box = (props) => { 
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/pic.jpeg")
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
       receiveShadow
    >
      <boxBufferGeometry/>
      <meshPhysicalMaterial
      map={texture}
        // color={"white"}
        // fog={false}
        // opacity={0.7}
        // transparent
        // metalness={1}
        // roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        // side={THREE.DoubleSide}
      />
    </mesh>
  );
};
const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
};
function App({ count = 12 }) {
  // const points = useMemo(() => {
  //   const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
  //   console.log(p)
  //   return new BufferAttribute(new Float32Array([
  //      0, 1,  1,
  //     0, 0,  0,

  //      0,  1,  -1
  //   ] ), 3);
  // }, [count]);
  return (
    <div className=" bg-gray-400 h-screen w-screen">
      <Canvas className="bg-black" camera={{ position: [3, 3, 3] }} shadows>
        {/* <fog attach={'fog'} args = {['white', 1, 10]} /> */}
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
        <Box position={[0, 1, 0]} />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
        {/* CUSTOM GEOMETRY */}
        {/* <mesh>
          <meshBasicMaterial side={THREE.DoubleSide}/>
          <bufferGeometry attach={'geometry'}>
          <bufferAttribute
        
        attach="attributes-position"
     {...points}
     />
          </bufferGeometry>
        </mesh> */}
      </Canvas>
    </div>
  );
}

export default App;
