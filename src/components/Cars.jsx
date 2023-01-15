import { Suspense } from "react"
import Dragable from "./Dragable"
import BoundingBox from "./BoundingBox"
import Model from "./Model"
const Cars = () =>{
    
    return(
        <Suspense fallback={null}>
        <Dragable transformGroup>
          <BoundingBox position={[4, 4, 0]} dims={[2,2,2]} offset={[0,-0.9,0.8]}>
            <Model
              path="/toyota_gr_supra/scene.gltf"
            />
          </BoundingBox>
        </Dragable>
        <Dragable >
          <BoundingBox position={[-4, 4, 0]} dims={[2,2,2]} offset={[0,-0.1,0.2]}>
            <Model
            path="/tesla_model_x/scene.gltf"
          />
          </BoundingBox>
          
        </Dragable>
      </Suspense>  
    )
}

export default Cars;