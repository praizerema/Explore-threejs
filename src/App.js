import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import BackGround from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import { Physics } from "@react-three/cannon";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import Effects from "./components/Effects";
function App() {
  return (
    <div className=" relative h-screen w-screen">
      <ColorPicker />
      <CameraButtons />
      <Canvas
      gl={{
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        depth: false
      }}
      className="bg-black" camera={{ position: [7, 7, 7] }} shadows>
        <CameraControls />
       <Lights/>
        <Orbit /> 
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <BackGround />
        </Suspense>
        
        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics> 
     <Effects />
      </Canvas>
    </div>
  );
}

export default App;
