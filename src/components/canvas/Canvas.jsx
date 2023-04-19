import React from 'react'
import { useRef, useEffect } from "react";

export const Canvas = 
({ 
	fill=false, 
	height, 
	width, 
	drawFunc,
	id, 
	children,
}) => {
  const canvasRef = useRef(null);
  console.log(id)
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.id = id
    if(fill){
    	canvas.width = canvas.parentElement.offsetHeight
    	canvas.height = canvas.parentElement.offsetWidth	
    	//canvas.style.width ='100%'
    	//canvas.style.height='100%'

    } else {
    	canvas.width = width
    	canvas.height = height
    	//canvas.style.width = width
    	//canvas.style.height= height
    }

    

	
    if(drawFunc){
    	drawFunc(context, canvas.width, canvas.height);
	}
  }, [drawFunc]);

  return (
    <canvas ref={canvasRef} />
  );
};