import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Model = props =>{
const model = useLoader(
    GLTFLoader,
    props.path
)
    return(
        <primitive object={model.scene} scale/>
    )
}

export default Model;