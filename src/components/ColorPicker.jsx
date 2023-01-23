import React from 'react';
import * as THREE from "three";
import state from '../State';
const ColorPicker = (props) =>{
    const handleClick = (e) =>{
      if(!state.activeMesh) return;
      state.activeMesh.material.color =  new THREE.Color(e.target.style.background)
    }
  return(
    <div className="flex flex-wrap w-fit mx-auto left-0 right-0" style={{position: 'absolute', zIndex: 1}} >
    <div style={{background: "blue"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "yellow"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "red"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "purple"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "gold"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "gray"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "pink"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "brown"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "black"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "orange"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "white"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>
    <div style={{background: "green"}} className="h-[50px] w-[50px] cursor-pointer" onClick={handleClick}></div>

  
  </div>
  )
  }

  export default ColorPicker