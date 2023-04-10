import { Navbar } from '../components/navbar/Navbar.jsx'
import { NavItem } from '../components/navbar/NavItem.jsx'
import {AiFillSetting} from 'react-icons/ai'

export default {
    'title': 'basic navbar',
    component: Navbar

}

const NavbarTemplate = ({items,  navItemArgs, ...args}) =>{
    return(
        <Navbar {...args}
            additionalStyles={{borderRadius: "1rem"}}
        >
            <NavItem {...navItemArgs}
            >
                <AiFillSetting/>
            </NavItem>
            <NavItem {...navItemArgs} 
            >

                <AiFillSetting/>
                {/*Link 2*/}
            </NavItem>
            <NavItem {...navItemArgs}
            >
                <AiFillSetting/>
               {/*Link 3 with additional text*/}
            </NavItem>
        </Navbar>
    )
}



export const simpleNavbar = NavbarTemplate.bind({});
simpleNavbar.args = {
    items: [
        {},
        {},
        {},
    ],
    navItemArgs: {
        textColor:"white", // color of text
        padding:"sm", // size variant, based on string we choose a size from ../../utility/mapping.js's fontSizeValues object
        fontSize: "lg",
        bgColor:"", //background color
        focusOn: true,
        href: "http://localhost:6006"
    },
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black",
} 


/*
const NavbarTemplate = ({items, navItemArgs ,...args}) =>{
    return(
        <Navbar {...args}>
            {items.map((element, index) => {
               return( 
                   <NavItem

                    {...navItemArgs}
                   >
                    {index + 1}
                   </NavItem>
                )
            })}
        </Navbar>
    )
}

export const simpleNavbar = NavbarTemplate.bind({});
simpleNavbar.args = {
    items: [
        {},
        {},
        {},
    ],
    navItemArgs:{
        textColor: "black",
        size: "md",
        bgColor: orange,
    },
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
} 
*/