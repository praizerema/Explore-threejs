import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import BackGround from "./components/Background";
import ColorPicker from "./components/ColorPicker"
import { Physics } from "@react-three/cannon";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
function App() {
  return (
    <div className=" relative h-screen w-screen">
      <ColorPicker />
      <CameraButtons />
      <Canvas className="bg-black" camera={{ position: [7, 7, 7] }} shadows>
        <CameraControls />
        <ambientLight intensity={0.2} />

        <Orbit />
        <axesHelper args={[5]} />
          <Suspense fallback={null}>
            <BackGround />
          </Suspense> 
          <Bulb position={[-6, 3, 0]} />
          <Bulb position={[0, 3, 0]} />
          <Bulb position={[6, 3, 0]} />

        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
