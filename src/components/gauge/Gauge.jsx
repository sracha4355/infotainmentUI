import React from 'react'
import {Canvas} from '../canvas/Canvas.jsx'
import {useRef, useEffect, useState} from 'react'
import {RadialGauge} from 'canvas-gauges';

/*
BUG: when changing the colorNeedle and colorNeedleEnd control on storybook, an error will pop up, but changing it via
writing a component works fine
*/

// Define a functional component named Gauge that receives props as its input

/*
The props required here are ticks, range, and highlights for proper rendering. The numbers passed to it must work with each other
*/
export const Gauge = 
({
	width, // width of canvas the gauge will be rendered on
	height, // height of canvas the gauge will be rendered on
	range = [0,220], // range for the possible numbers on the gauge
	ticks = ['0','20','40','60','80','100','120','140','160','180','200','220'], // the positions of the major tick marks, must fall within the range
	minorTicks = 2, // the number of minor tick marks between the major tick marks
	outlineAroundNumbersCircle=false, // whether to draw a line around the circle containing the numbers
	bgColor="#28282B", // the background color of the gauge
	tickColor='#f5f5f5', // the color of the major tick marks
	minorTickColor="#ddd", // the color of the minor tick marks
	colorTitle="#fff", // the color of the title text
	colorUnits="#ccc", // the color of the units text
	colorNumbers="#eee", // the color of the number text
	showCurrentValue=false, // whether to display the current value of the gauge
	colorNeedle= 'rgba(240, 128, 128, 0)', // the color of the needle
	colorNeedleEnd= 'rgba(255, 160, 122, 0)', // the color of the end of the needle
	units="mi/h", // the units displayed on the gauge
	highlights = [
	 	{ from: 0, to: 50, color: 'rgba(0,255,0,.15)' }, // the color and range of the first highlight
	 	{ from: 50, to: 100, color: 'rgba(255,255,0,.15)' }, // the color and range of the second highlight
	 	{ from: 100, to: 150, color: 'rgba(255,30,0,.25)' }, // the color and range of the third highlight
        { from: 150, to: 200, color: 'rgba(255,0,225,.25)' }, // the color and range of the fourth highlight
        { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }, // the color and range of the fifth highlight
	], // an array of highlight objects that define color ranges on the gauge
	fill = false, // whether to fill the entire parent container with the gauge

}) => {
			
	const canvasRef = useRef(null) // create a reference to the canvas element
	const [gaugeValue, setGaugeValue] = useState(89) // initialize the gauge value as 89 and set up a state variable to track it

	useEffect( () =>{
		const canvas = canvasRef.current // get a reference to the canvas element
		const context = canvas.getContext("2d") // get the 2D context for the canvas element
		canvas.width = fill ? canvas.parentElement.offsetWidth : width;	// set the width of the canvas element
		canvas.height = fill ? canvas.parentElement.offsetHeight : height; // set the height of the canvas element
		//canvas.height -= 4 // There is a bug on storybook where will fill is on, change to the props increases the height by 4
		// this is a bandage solution to this 

		

		// Declaring gauge object, the props are passed to the options they effect
 		var radial = new RadialGauge({
	 	    renderTo: canvas.id,
	 	    width: canvas.width,
	 	    height: canvas.height,
	 	    units: units,
	 	    title: false,
	 	    value: gaugeValue,
	 	    minValue: range[0],
	 	    maxValue: range[1],
	 	    majorTicks: ticks,
	 	    minorTicks: minorTicks,
	 	    strokeTicks: outlineAroundNumbersCircle,
	 	    highlights: highlights,
	 	    colorPlate: bgColor,
	 	    colorMajorTicks: tickColor ,
	 	    colorMinorTicks: minorTickColor,
	 	    colorTitle: colorTitle,
	 	    colorUnits: colorUnits,
	 	    colorNumbers: colorNumbers,
	 	    colorNeedle: colorNeedle, 
	 	    colorNeedleEnd: colorNeedleEnd,
	 	    valueBox: showCurrentValue,
	 	    animationRule: 'bounce',
	 	    animationDuration: 500
 		}); 
		radial.draw()

	}, [ 
		width,
		height,
		range,
		ticks,
		minorTicks,
		outlineAroundNumbersCircle,
		bgColor,
		tickColor,
		minorTickColor,
		colorTitle,
		colorUnits,
		colorNumbers,
		showCurrentValue,
		colorNeedle,
		colorNeedleEnd,
		units,
		highlights,
		fill
	]);

	const fillStyles = {
		width: '100%',
		height: '100%'
	}
	return (
		<canvas id={'gauge-id'} ref={canvasRef}
			style={fill ? fillStyles : null}
		 />
	)
}

 