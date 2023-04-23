import {Gauge} from '../../components/gauge/Gauge.jsx'
import {Canvas} from '../../components/canvas/Canvas.jsx'
export default {
	'title': 'gauge',
	component: Gauge,
}

const GaugeTemplate = ({ ...args}) =>{
    return(
    	<Gauge {...args}/>
    )
}

export const gauge = GaugeTemplate.bind({});
gauge.args = {
	width: 500,
	height: 500,
	fill: false,
	range:[0,220], // range for the numbers on the gauge
	ticks: ['0','20','40','60','80','100','120','140','160','180','200','220'],
	minorTicks: 2,
	outlineAroundNumbersCircle:false, // I have no idea what to name this lol
	bgColor:"#28282B",
	tickColor:'#f5f5f5',
	minorTickColor:"#ddd",
	colorTitle:"#fff",
	colorUnits:"#ccc",
	colorNumbers:"#eee",
	showCurrentValue:false,
	colorNeedle:'#f5f5f5',
	colorNeedleEnd: '#f5f5f5',
	units:"mi/h",
	highlights: [
		 { from: 0, to: 50, color: 'rgba(0,255,0,.15)' },
		 { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
		 { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
	     { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
	     { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
	], 
}	

gauge.argTypes = {
	colorTitle : { 
		control : {type : "color"}
	},
	colorUnits : { 
		control : {type : "color"}
	},
	colorNumbers : { 
		control : {type : "color"}
	},
	colorNeedle : { 
		control : {type : "color"}
	},
	colorNeedleEnd : { 
		control : {type : "color"}
	}
}
