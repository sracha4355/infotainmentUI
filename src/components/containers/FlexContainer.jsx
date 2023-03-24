/*
    Component: FlexContainer
    description:    
    "a layout component to easily create a flex container.
    Making a flex container, will allow us to easily integrate flex containers into 
    other components, allowing for complex behavior with simple building blocks"
*/

import React from "react";

/*  - the props are essentially ways to style the container  
    - they have default values of css styles, but the user can input their own values
        for the css properties
    - additionalStyles will allow the user to customize the container even more,
    pass in a object containing the styles */
export const FlexContainer = ({
    flexOrientation="row", //prop for flex-direction
    bgColor="white", //prop for background-color
    jContent="space-evenly", //prop's value will determine justify-content's value
    aItems="center", // same as param above but for align-content
    wrap="wrap", // prop flexbox's flex-wrap property
    additionalStyles, // proper use: pass an object with more styles
    children // react's children prop

}) => {
    const styles = {
        display: 'flex',
        flexDirection: flexOrientation,
        justifyContent: jContent,
        alignItems: aItems,
        backgroundColor: bgColor,
        flexWrap: wrap,
        ...additionalStyles
    };

    return(
        <>
            <div style={styles}>
                {children}
            </div>
        </>
    )
}