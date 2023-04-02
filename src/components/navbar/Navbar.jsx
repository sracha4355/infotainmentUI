import React from "react";
import { FlexContainer } from "../containers/FlexContainer";



export const Navbar = ({
    direction,  
    justifyContent,
    alignItems,
    bgColor,
    additionalStyles,
    children
}) =>{
    return (
        <>
            <FlexContainer
                flexOrientation={direction}
                jContent={justifyContent}
                alignItems={alignItems}
                additionalStyles={additionalStyles}
                bgColor={bgColor}
            >
                {children}
            </FlexContainer>
        </>
    )
}