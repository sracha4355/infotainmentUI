import {Navbar} from '../components/Navbar.jsx';

// setup stories for component
export default {
    title: 'Navbar',
    component: Navbar,
}

export const test = () => <Navbar/>

// create story  
export function Test(args){
    return(<Navbar {...args}/>)
}
// list the props of the component that can be controlled by storyboard
// list component's props and give it a dummy value, the value can be changed in storyboard
// for testing
Test.args = {
    numOfNavLinks: 3,
    orientation: 'row',
}
