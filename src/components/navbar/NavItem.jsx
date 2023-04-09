import React from "react";
import { paddingSizeValues, fontSizeValues} from '../../utility/mapping.js'
// paddingSizeValues, fontSizeValues: these are objects which map a size (xs, sm, md, lg, xl) to a numeric value

export const NavItem = ({
    href, // the link
    textColor, // color of text
    fontSize = "sm", // size variant, based on string we choose a size from ../../utility/mapping.js's fontSizeValues object  
    padding = "sm", // padding = "sm", // size variant, based on string we choose a size from ../../utility/mapping.js's paddingSizeValues object
    bgColor, //background color
    focusOn = false,

    additionalStyles, // pass in additionalStyles not accounted for by the component, the styles add on to the component's styles
    useCustomStyles =  false, // flag for developer to pass in completely custom styles
    customStyles, // the custom styles
    children
}) => {

    // focus object will contain the background we want to change to when the user hovers over an element
    const focus = {}
    if(focusOn){
        focus.backgroundColor = 'rgba(255, 255, 255, 0.192)';
    } else {
        // in this case we can just set the focus color to the background color of the navitem, so there is no change in color
        focus.backgroundColor = bgColor
    }     

    // get padding and fontSize values based on size, and init a styles object
    const _padding = paddingSizeValues[padding] 
    const _fontSize = fontSizeValues[fontSize] 
    const propStyles = {
        textDecoration: 'none',
        color: textColor,
        padding: _padding,
        fontSize: _fontSize,
        backgroundColor: bgColor,
        ...additionalStyles
    }    

    // methods which trigger an event to change the navitem's bgColor
    const whenMouseOverNavLink = (e) => e.target.style.backgroundColor = focus.backgroundColor 
    const whenMouseLeavesNavLink = (e) => e.target.style.backgroundColor = propStyles.backgroundColor

    return ( 
        <>
            <a href={href} style={useCustomStyles ? customStyles : propStyles}
                onMouseEnter = {whenMouseOverNavLink}
                onMouseLeave = {whenMouseLeavesNavLink}
            >
                {children}
            </a>
        </>
    )
}