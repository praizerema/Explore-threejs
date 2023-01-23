import React from 'react';
import {useBox} from "@react-three/cannon"

const Floor = (props) => {
  const [ref, api] = useBox(()=> ({args: [200, 1, 100] ,...props}))
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[200, 1, 200]} />
      <meshPhysicalMaterial transparent opacity={0.1}/>
    </mesh>
  );
};

export default Floor