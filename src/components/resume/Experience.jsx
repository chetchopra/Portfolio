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

const Experience = props => {
    return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={3}>
						<Card
							image='https://pbs.twimg.com/profile_images/552870762218926080/-bTW7SUA_400x400.png'
							header='Marel'
							meta='Sept 2016 - Jan 2019'
						/>
					</Grid.Column>
					<Grid.Column width={9}>
						
						<p><strong>
							Role
						</strong></p>
						<p>Software Service Engineer</p>

						<p><strong>
							Responsibilities
						</strong></p>

						<ul>
							<li>Consulting</li>
								<ul>
									<li>Increased client satisfaction through on-site meetings to evaluate their unique 
								software needs. Presented/installed an agreed upon software configuration and flow.</li>
								</ul>

							<li>Business Intelligence</li>
								<ul>
									<li>Evaluated and met client BI needs by creating reports and dashboards thus 
								increasing software usage. SQL Server Reporting Services used for reports and dashboards.</li>
								</ul>

							<li>Training</li>
								<ul>
									<li>Coached new employees on the technologies and best practices required for the position. 
								Created and presented training material to clients, adding to Marel’s collective of training material.</li>
								</ul>

							<li>Service</li>
								<ul>
									<li>Provided remote and onsite support to quickly resolve issues regarding networking, firewall 
								configuration, and software configuration.</li>
								</ul>


						</ul>
					</Grid.Column>
				</Grid.Row>

				<Divider section />

				<Grid.Row>
					<Grid.Column width={3}>
						<Card
							image='https://pbs.twimg.com/profile_images/541035744941199360/AvKG1icr_400x400.jpeg'
							header='UW Tacoma'
							meta=' Jan 2016 - Sept 2016'
						/>
					</Grid.Column>
					<Grid.Column width={9}>
						
					<p><strong>
							Role
						</strong></p>
						<p>Robotics Instructor / Computer Science Helper</p>

						<p><strong>
							Responsibilities
						</strong></p>

						<ul>
							<li>Created and taught lessons for a UW kids summer program. Educated youth in basic logic and robotics.</li>
							<li>Assisted students with computer science coursework to ensure they understood the concept.</li>

						</ul>
					</Grid.Column>
				</Grid.Row>

				{/* <Grid.Row>
					<Grid.Column width={3}>
						<Card
							image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/1200px-7-eleven_logo.svg.png'
							header='7-11'
							meta='June 2015 - Jan 2016'
						/>
					</Grid.Column>
					<Grid.Column width={9}>
						
					<p><strong>
							Role
						</strong></p>
						<p>Manager</p>

						<p><strong>
							Responsibilities
						</strong></p>

						<ul>
							<li>Created and taught lessons for a UW kids summer program. Educated youth in basic logic and robotics.</li>
							<li>Assisted students with computer science coursework to ensure they understood the concept.</li>

						</ul>
					</Grid.Column>
				</Grid.Row>
				 */}
				
			</Grid>
		);
}

export default Experience;