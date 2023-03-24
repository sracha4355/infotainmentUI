import { FlexContainer } from "../../components/containers/FlexContainer"; 
export default {
    title: 'Flex Container',
    component: FlexContainer 
}

const FlexContainerTemplate = ({items, ...args}) => {
    return(
        <FlexContainer {...args}>
            {items.map((_,index) => { 
                return (<a>{index + 1}</a>)
            })}
        </FlexContainer>
    )
}


export const simpleFlexContainer = FlexContainerTemplate.bind({});
simpleFlexContainer.args = {
    items: [
        {

        },
        {

        },
        {

        },
    ],
    flexOrientation: "row", //prop for flex-direction
    bgColor: "white", //prop for background-color
    jContent: "space-evenly", //prop's value will determine justify-content's value
    aItems: "center", // same as param above but for align-content
    wrap: "wrap", // prop flexbox's flex-wrap property


} 