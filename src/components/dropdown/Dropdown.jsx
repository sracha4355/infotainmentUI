import React from 'react'
import {useState, useEffect} from 'react'
import {fontSizeValues, paddingSizeValues} from '../../utility/mapping.js'
export const Dropdown = 
({
	fontSize="md",
	paddingSize="sm",
	name="dropdown",
	bgColor="none",
	additionalStyles={},
	useCustomStyles=false,
	customStyles={},
	children,	
}) => {
	const _padding = fontSizeValues[paddingSize]
	const _fontSize = paddingSizeValues[fontSize]
	const styles = {
		fontSize: _fontSize,
		padding: _padding,
		backgroundColor: bgColor,
		borderRadius: '10px',
		border: 'none',
		...additionalStyles	
	}
	const finalStyles = useCustomStyles ? customStyles : styles
	return (
		<> 
			<select style={finalStyles} name="cars" id="cars">
			   <option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
			   <option value="opel">Opel</option>
			   <option value="audi">Audi</option>	
			</select>
		</>
	)
}

/*
drop down should have a width
and it appears once a event is triggered, such as a click

*/
