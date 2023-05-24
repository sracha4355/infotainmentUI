import React from 'react'
import {Grid} from '../components/containers/Grid.jsx'
import {GridItem} from '../components/containers/GridItem.jsx'
import {Gauge} from '../components/gauge/Gauge.jsx'
import {FlexContainer} from '../components/containers/FlexContainer.jsx'
import {Navbar} from '../components/navbar/Navbar.jsx'
import {NavItem} from '../components/navbar/NavItem.jsx'
import {AiFillSetting} from 'react-icons/ai'
import {FaMusic} from 'react-icons/fa'
import {SiGooglemaps} from 'react-icons/si'
import {HiInformationCircle} from 'react-icons/hi'
import {AiFillPhone} from 'react-icons/ai'
import {RxThickArrowLeft} from 'react-icons/rx'
import {RxThickArrowRight} from 'react-icons/rx'
import {fontSizeValues} from '../utility/mapping.js'
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
    					gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    					gridTemplateRows: 'auto auto 100px',
    				}
    			}
			>
			<GridItem gridArea="g1"				
    			additionalStyles={{
    				backgroundColor: '#353935',}}
    		>
    			<div style={{
    					width: '100%',
    					height: '100%',
    					display: 'flex', 
    					justifyContent: 'center',
    					alignItems: 'center'
    				}}>
    				<Gauge 
    					fill={true}
    					highlights={[]}
    					outlineAroundNumbersCircle={true}
    					colorNeedle={'#f5f5f5'}
    					colorNeedleEnd={'#f5f5f5'}

    				/>
    			</div>	

			</GridItem>

			<GridItem gridArea="g2"
    			additionalStyles={{backgroundColor: '#353935'}}
			>
				<div style={{
    					width: '100%',
    					height: '100%',
    					display: 'flex', 
    					justifyContent: 'center',
    					alignItems: 'center'
    				}}>
    				<Gauge 
    					canvasId={'canvas-id2'} 
    					fill={true}
    					highlights={[]}
    					outlineAroundNumbersCircle={true}
    					colorNeedle={'#f5f5f5'}
    					colorNeedleEnd={'#f5f5f5'}
    					units={"rpm"}
    				/>
    			</div>	
			</GridItem>

			<GridItem gridArea="e"			
    			additionalStyles={{backgroundColor: 'tomato'}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
					}}
				>
					<FlexContainer
						flexOrientation={"column"}
						additionalStyles={{
							height:'100%'
						}}
						bgColor={"#353935"}

					>
						<FlexContainer
							flexOrientation={"row"}
							jContent={"space-between"}
							additionalStyles={{
								height: '40%',
								width: '100%',
								padding: '1rem',
								boxSizing: 'border-box',
								flexBasis: '0',
								flexGrow: '2'
							}}
							bgColor={"#353935"}
						>
							<RxThickArrowLeft color={"white"} fontSize={'3rem'}/>
							<RxThickArrowRight color={"white"} fontSize={'3rem'}/>
						</FlexContainer>
						<FlexContainer
							flexOrientation={"column"}
							jContent={"space-between"}
							bgColor={"#353935"}
							additionalStyles={{
								flexBasis: '0',
								flexGrow: '8',
								padding: '2rem',
								paddingTop: '4rem',
								paddingBottom: '4rem',
								boxSizing: 'border-box',
								color: '#AFE1AF',

							}}
						>
							<span
								style={{
									fontWeight: 'bold',
									fontSize: fontSizeValues.md
								}}
							>
							P
							</span>
							<span
								style={{
									fontWeight: 'bold',
									fontSize: fontSizeValues.md
								}}
							>
							R
							</span>
							<span
								style={{
									fontWeight: 'bold',
									fontSize: fontSizeValues.md
								}}
							>
							D
							</span>

							<span
								style={{
									fontWeight: 'bold',
									fontSize: fontSizeValues.md
								}}
							>
							N
							</span>
						</FlexContainer>
					</FlexContainer>


				</div>	
			</GridItem>

			<GridItem gridArea="i"
    			additionalStyles={{backgroundColor: 'cyan'}}
			>
				<div
					style ={{
						width: '100%',
						height: '100%'
					}}>

					<Navbar
						backgroundColor={"#353935"}
						additionalStyles={{
							height:'100%'	
						}}
					>
						
						<NavItem 
							textColor={'white'}
							fontSize={'lg'}
							padding={'lg'}
							focusOn={true}
							bgColor={"#353935"}	
						>
							<AiFillSetting/>
						</NavItem>

						<NavItem 
							textColor={'white'}
							fontSize={'lg'}
							padding={'lg'}
							focusOn={true}
							bgColor={"#353935"}
						>
							<FaMusic/>
						</NavItem>

						<NavItem 
							textColor={'white'}
							fontSize={'lg'}
							padding={'lg'}
							focusOn={true}
							bgColor={"#353935"}
						>
							< SiGooglemaps />
						</NavItem>

						<NavItem 
							textColor={'white'}
							fontSize={'lg'}
							padding={'lg'}
							focusOn={true}
							bgColor={"#353935"}
						>
							<HiInformationCircle/>
						</NavItem>

						<NavItem 
							textColor={'white'}
							fontSize={'lg'}
							padding={'lg'}
							focusOn={true}
							bgColor={"#353935"}
						>
							<AiFillPhone/>
						</NavItem>
					</Navbar>
				</div>
			</GridItem>

			</Grid>

		</>
	)

}