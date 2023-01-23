import state from "../State";
const CameraButtons = () => {
    const sets ={
      // roadster
        1: {
            cameraPosition: [9,2,4],
            target: [4,0,0],
            name: "Object_34"
        },
        // m3_model
        2: {
            cameraPosition: [1,2,5],
            target: [-4,0,0],
            name: "Object_2"
        }
    }
    const handleClick = num =>{
        state.cameraPosition.set(...(sets[num].cameraPosition))
        state.target.set(...(sets[num].target))
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true
    }
  return (
    <>
      <button 
      onClick={e => handleClick(2)}
      className="absolute bottom-[30vh] left-[40vh] z-[1] h-[35px] w-[35px] bg-white text-center rounded-[100%] text-lg cursor-pointer font-bold opacity-[0.7] border border-black ">
        {"<"}
      </button>
      <button 
      onClick={e => handleClick(1)}
      
      className="absolute bottom-[30vh] right-[40vh] z-[1] h-[35px] w-[35px] bg-white text-center rounded-[100%] text-lg cursor-pointer font-bold opacity-[0.7] border border-black ">
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
