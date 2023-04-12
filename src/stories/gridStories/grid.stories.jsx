import {Grid} from  '../../components/containers/Grid.jsx';
import {GridItem} from '../../components/containers/GridItem.jsx'

export default{
	'title': 'Grid component',
	component: Grid,
}

const GridTemplate = ({items, gridItemArgs, ...args}) =>{
    return(
    	<Grid
    		gridSchema=
    		'"Item1 Item1 Item2"
    		"Item1 Item1 Item2"
    		"Item3 Item3 Item2"
    		"Item3 Item3 Item2"
    		"Item4 Item4 Item4"'
   		>    	
    		<GridItem gridArea="Item1">
    			Grid Item 1
    		</GridItem>

    		<GridItem gridArea="Item2">
    			Grid Item 2
    		</GridItem>

    		<GridItem gridArea="Item3">
    			Grid Item 3
    		</GridItem>
    		<GridItem gridArea="Item4">
    			Grid Item 4
    		</GridItem>
    	</Grid>
    )
}

export const grid  = GridTemplate.bind({});
grid.args = {

}	