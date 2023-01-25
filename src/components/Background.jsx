import React, {useMemo} from 'react';
import { useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
const BackGround = props => {
    const texture = useLoader(THREE.TextureLoader, '/autoshop.jpg')
    const {gl} = useThree()
   const formatted =  useMemo(()=>
    new THREE.WebGLCubeRenderTarget(
      texture.image.height
      ).fromEquirectangularTexture(gl, texture)
    , [gl, texture])

    return(
   <primitive attach="background" object={formatted.texture} {...props}/>
    )
  }

  export default BackGround