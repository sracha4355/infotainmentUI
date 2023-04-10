import React from "react";
import { FlexContainer } from "../containers/FlexContainer";

// Navbar's structure is a flexbox container
export const Navbar = ({
    direction,  // decides orientation of container
    justifyContent, // decides orientation of items in container, in the main axis
    alignItems,// decides orientation of items in container, in the cross axis 
    backgroundColor, // backgroundColor of the navbar
    additionalStyles, // a object to pass in custom styles not covered by the navbar component itself
    children
}) =>{

    return (

        <>
            <FlexContainer
                flexOrientation={direction}
                jContent={justifyContent}
                alignItems={alignItems}
                additionalStyles={additionalStyles}
                bgColor={backgroundColor}
            >
                
                    {children}
                
            </FlexContainer>
        </>
    )
}