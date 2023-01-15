import React from 'react';
import * as THREE from "three";
import state from '../State';
const ColorPicker = (props) =>{
    const handleClick = (e) =>{
      if(!state.activeMesh) return;
      state.activeMesh.material.color =  new THREE.Color(e.target.style.background)
    }
  return(
    <div className=" bg-red-700 flex" style={{position: 'absolute', zIndex: 1}} >
    <div style={{background: "blue", height:"50px"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}>df</div>
    <div style={{background: "yellow"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}>xc</div>
    <div style={{background: "red"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}>xc</div>
  
  </div>
  )
  }

  export default ColorPicker