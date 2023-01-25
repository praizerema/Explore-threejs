import { useFrame } from "@react-three/fiber";
import state from "../State";

const CameraControls = () => {
  useFrame(({ camera, scene }) => {
    if(state.activeMesh.name !== state.activeMeshName){
      state.activeMesh = scene.getObjectByName(state.activeMeshName) || {}
    }
    if (state.shouldUpdate) {
      camera.position?.lerp(state.cameraPosition, 0.1);
      scene.orbitControls.target.lerp(state.target, 0.1)
      scene.orbitControls.update();
      const diff = camera.position.clone().sub(state.cameraPosition).length();
      if (diff < 0.1) state.shouldUpdate = false;
    }
  });
  return null;
};

export default CameraControls;
