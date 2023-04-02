import React, { Children } from "react";

export const NavItem = ({
    href,
    additionalStyles,
    textColor,
    size = "md",
    bgColor,
    useCustomStyles,
    children
}) => {
    let padding = 0
    if(size === 'sm'){
        padding = 8
    } else if (size === 'md'){
        padding = 16
    } else if (size === 'lg') {
        padding = 24
    } else if (size === 'xl') {
        padding = 32
    } else {
        padding = 16
    }

    const variantStyles ={
        color: textColor,
        padding: padding,
        backgroundColor: bgColor
    }


    return ( 
        <>
            <a href={href} style={useCustomStyles ? additionalStyles : variantStyles}>
                {children}
            </a>
        </>
    )
}