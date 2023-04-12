import React from 'react';

export const Grid = 
({
	gridSchema, // pass in a string that you would pass to "grid-template-area" style, to define the layout
	//note the gridItem component's gridArea must be the same as the area you are mapping to inside the grid
	customStyles,
	additionalStyles,
	useCustomStyles,
	children
}) => {

	let	styles = {}
	console.log(gridSchema)
	const gridStyles = {
		display: 'grid',
		gridTemplateAreas: gridSchema,
		...additionalStyles,
	}

	styles = useCustomStyles ? customStyles : gridStyles

	return(
		<>
			<div style={styles}>
				{children}
			</div>
		</>
	)
}

