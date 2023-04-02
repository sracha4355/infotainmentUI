import { Navbar } from '../../components/navbar/Navbar.jsx'
import { NavItem } from '../../components/navbar/NavItem.jsx'

export default {
    'title': 'basic navbar',
    component: Navbar
}

const NavbarTemplate = ({items,...args}) =>{
    return(
        <Navbar {...args}>
            <NavItem
                size="md"
            >
                Link 1
            </NavItem>
            <NavItem
                size="xl"
                textColor="white"
            >
                Link 2
            </NavItem>
            <NavItem
                size="md"
            >
                Link 3
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
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    bgColor: "orange",
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