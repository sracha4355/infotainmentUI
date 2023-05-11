import React from 'react'
import {Grid} from '../components/containers/Grid.jsx'
import {GridItem} from '../components/containers/GridItem.jsx'
import {Gauge} from '../components/gauge/Gauge.jsx'
import {FlexContainer} from '../components/containers/FlexContainer.jsx'
import {Navbar} from '../components/navbar/Navbar.jsx'
import {NavItem} from '../components/navbar/NavItem.jsx'
import {AiFillSetting} from 'react-icons/ai'

export const GaugeCluster = (

) => {
	return (
		<>
			<Grid
				gridSchema=
				'"g1 e g2"
				 "g1 e g2"
				 "i i i "'
    			additionalStyles={
    				{
    					minHeight: '100vh',
    					gridTemplateColumns: 'minmax(0, 1fr) minmax(1fr, 2fr ) minmax(0,1fr)',
    					gridTemplateRows: 'auto auto 100px',
    				}
    			}
			>
			<GridItem gridArea="g1"				
    			additionalStyles={{
    				backgroundColor: 'red',}}
    		>
    			<div style={{
    					width: '100%',
    					height: '100%'
    				}}>
    				<Gauge fill={true}/>
    			</div>	

			</GridItem>

			<GridItem gridArea="g2"
    			additionalStyles={{backgroundColor: 'orange'}}
			>
				
			</GridItem>

			<GridItem gridArea="e"			
    			additionalStyles={{backgroundColor: 'pink'}}
			>
				
			</GridItem>

			<GridItem gridArea="i"
    			additionalStyles={{backgroundColor: 'cyan'}}
			>
				<Navbar
					bgColor={"#999"}
				>
					<NavItem>
						<AiFillSetting/>
					</NavItem>

					<NavItem>
						<AiFillSetting/>
					</NavItem>

					<NavItem>
						<AiFillSetting/>
					</NavItem>
				</Navbar>
			</GridItem>

			</Grid>

		</>
	)

}