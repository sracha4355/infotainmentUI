import React from "react";

/*
- The number of navigation links
- the orientation of the links (vertical, horizontal)
- slide through the links or scroll in the event of too many links not being able to
  fit in the navbar
*/

export const Navbar = ({numOfNavLinks, orientation, isScroll, isSlider, children}) =>{    
    const styles = { 
        display: 'flex',
        flexDirection: orientation == 'row' ? 'row' : 'column'
    }

    const navLinks = Array.from({length: numOfNavLinks}, (_, index) => {
        const linkText = `Link number ${index}` 
        return (<a key={index}>{linkText}</a>)
    });

    return(
        <>
            Navbar
            <nav style={styles}>
                links
                {navLinks}
            </nav> 
        </>
    )
}