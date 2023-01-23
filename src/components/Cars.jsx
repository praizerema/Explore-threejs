import { Suspense } from "react"
import Dragable from "./Dragable"
import BoundingBox from "./BoundingBox"
import Model from "./Model"
const Cars = () =>{
    
    return(
        <Suspense fallback={null}>
        <Dragable transformGroup>
          <BoundingBox position={[4, 4, 0]} dims={[2,3.8,2]} offset={[0,-0.9,0.8]}>
            <Model
              path="/tesla_roadster/scene.gltf"
            scale={[1.5,1.5,1.5]}

            />
          </BoundingBox>
        </Dragable>
        {/* <Dragable >
          <BoundingBox position={[2, 2, 0]} dims={[2,2,2]} offset={[0,-0.9,0.8]}>
            <Model
              path="/tesla_cybertruck/scene.gltf"
            scale={[1.5,1.5,1.5]}

            />
          </BoundingBox>
        </Dragable> */}
        <Dragable  transformGroup>
          <BoundingBox position={[-4, 4, 0]} dims={[2,2.5,2]} offset={[0,-0.1,0.2]}>
            <Model
            path="/tesla_model_3/scene.gltf"
            scale={[0.5,0.5,0.5]}
          />
          </BoundingBox>
          
        </Dragable>
          {/* Animated */}
          <group position={[8.5,0.05,-8]}>
             <Model
            path="/anime_male_character_-_psx_style/scene.gltf"
            scale={[0.5,0.5,0.5]}
          />
          </group>
       
          {/* Animated */}
            {/* <Model
            path="/baby_fear_-_the_rookies_entry/scene.gltf"
            // scale={[0.5,0.5,0.5]}
          /> */}
          <group position={[-7, 0.2, 0]}>
             <Model
            path="/lady-standing/scene.gltf"
            scale={[0.2,0.2,0.2]}
          />
          </group>
          <group position={[-8.5, 0.2, 0]} rotation={[0, Math.PI*0.4, 0]}>
           <Model
            path="/freefire_new_female_3d_model_by_pace_gaming (1)/scene.gltf"
            scale={[0.65,0.65,0.65]}
          />
          </group>
          <group position={[8,0.3,-7.1]}>
             <Model
            path="/unicycle/scene.gltf"
            scale={[0.2,0.2,0.2]}
          />
          </group>
          
          {/* Animated */}
           {/* <Model
            path="/robot_spider/scene.gltf"
            scale={[0.002,0.002,0.002]}
          /> */}
          {/* No animation */}
             {/* <Model
            path="/freefire_new_female_3d_model_by_pace_gaming (1)/scene.gltf"
            // scale={[0.2,0.2,0.2]}
          /> */}
          {/* Animated but not needed here */}
            {/* <Model
            path="/nanachi/scene.gltf"
            // scale={[0.5,0.5,0.5]}
          /> */}
      </Suspense>  
    )
}

export default Cars;