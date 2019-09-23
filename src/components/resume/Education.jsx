import React from 'react'
import { 
	Header, 
	Grid, 
	List, 
	Image, 
	Divider, 
	Icon,
Card } 
from 'semantic-ui-react';

const Education = props => {
    return (
			<Grid>
				

				<Grid.Row>
					<Grid.Column width={3}>

					<Image centered src='https://pbs.twimg.com/profile_images/541035744941199360/AvKG1icr_400x400.jpeg' size='small' circular />
					<p style={styles.imageText}><strong>
							Graduated: June 2016
						</strong></p>

					</Grid.Column>
					<Grid.Column width={9}>
					<p><strong>
						Bachelors of Science - Computer Science and Systems
					</strong></p>
		
						


					</Grid.Column>
				</Grid.Row>


				<Grid.Row>
					<Grid.Column width={3}>

					<Image centered src='https://yt3.ggpht.com/a/AGF-l7-9bTR-atoU1annefSvx_W6bDHOLtUoxNkPXg=s900-c-k-c0xffffffff-no-rj-mo' size='small' circular />
					<p style={styles.imageText}><strong>
							Completed: Jan 2016
						</strong></p>

					</Grid.Column>
					<Grid.Column width={9}>

						<p style={styles.infoText}><strong>
						Full Stack Web Development Nano-Degree
					</strong></p>
		
						


					</Grid.Column>
				</Grid.Row>



				<Grid.Row>
					<Grid.Column width={3}>

					<Image centered src='https://d30vrbc6r9jj52.cloudfront.net/web-illustrations/bootcamp-logo-flatiron-school.png' size='small' circular />
						<p style={styles.imageText}><strong>
							Completed: Aug 2019
						</strong></p>

					</Grid.Column>

					<Grid.Column width={9}>
						
					<p style={styles.infoText}><strong>
						Full Stack Web Development, Ruby on Rails, JavaScript, and React
					</strong></p>

					</Grid.Column>
				</Grid.Row>

				
			</Grid>
		);
}



const styles = {
	imageText: {
		paddingTop: '5%',
		textAlign: 'center'
	},
	infoText: {
		verticalAlign: 'middle'
	}
}

export default Education;