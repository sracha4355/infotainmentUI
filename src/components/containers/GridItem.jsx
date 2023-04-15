import React from 'react';

export const GridItem = 
({
	gridArea,
	additionalStyles,
	children,
}) => {
	
	const styles = {
		gridArea: gridArea,	
		...additionalStyles,
	}

	return (
		<div style={styles}>
			{children}
		</div>
	)
}