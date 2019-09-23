import React from 'react'
import { 
	Segment, 
	Header, 
	Icon,
	Card,
	Grid
} from 'semantic-ui-react';

const Project = props => {

    return <Segment className='section-holder'>
        <Header as='h1' dividing icon textAlign='center'>
            <Header.Content>Projects</Header.Content>
        </Header>

				<Grid>

				<Grid.Row>
					<Grid.Column width={5}>
						<Card
							image='https://github.com/chetchopra/IsItWorthIt/raw/master/readmegifs/IsItWorthIt-Compare.gif'
							header='Is It Worth It'
							meta='Made by Chet Chopra, and Jenny Shaw'
							description='A tool to help users get some perspective on their purchases by comparing them to the monetary value of other items'
						/>
					</Grid.Column>

					<Grid.Column width={7}>

					<h2>Is It Worth It</h2>
						
					<h4>Links</h4>
						<a href="https://chetchopra.github.io/IsItWorthIt/" target='_blank' rel='noopener noreferrer'>Demo</a>
						<b> | </b>
						<a href="https://www.youtube.com/watch?v=0fFQNmfTMns" target='_blank' rel='noopener noreferrer'>Video</a>
						<ul>						
							<li>Developed a Rails API backend with endpoints for user control and items</li>
							<li>Utilized local storage to manage user information client side</li>
							<li>Implemented an interactive front-end using vanilla Javascript</li>
						</ul>
					</Grid.Column>
				</Grid.Row>



				<Grid.Row>
					<Grid.Column width={5}>
						<Card
							image='https://media2.giphy.com/media/rgVLXMbhACKQ/source.gif'
							header='Lurkr'
							meta='Made by Chet Chopra'
							description=' A React application that allows users to view multiple subreddits simultaneously in a grid like format'
						/>
					</Grid.Column>

					<Grid.Column width={7}>

					<h2>Lurkr</h2>
						
					<h4>Links</h4>
						{/* <a href="https://chetchopra.github.io/IsItWorthIt/">Demo</a>
						<b> | </b> */}
						<a href="https://www.youtube.com/watch?v=u4X-69pAn6M&t=3s" target='_blank' rel='noopener noreferrer'>Video</a>
						<ul>						
							<li>Developed a wrapper API for the reddits API in order to clean and format the data better </li>
							<li>Used Ruby on Rails and PostgreSQL to manage user data</li>
							<li>Developed the front end using React and material-ui to create a modern and responsive experience</li>
						</ul>
					</Grid.Column>
				</Grid.Row>



				<Grid.Row>
					<Grid.Column width={5}>
						<Card
							image='https://media2.giphy.com/media/rgVLXMbhACKQ/source.gif'
							header='Learn App'
							meta='Made by Chet Chopra'
							description='A React-Native application geared towards teaching users more about data structures and algorithms'
						/>
					</Grid.Column>

					<Grid.Column width={7}>

					<h2>Learn App</h2>
						
					<h4>Links</h4>
						{/* <a href="https://chetchopra.github.io/IsItWorthIt/">Demo</a>
						<b> | </b> */}
						<a href="https://www.youtube.com/watch?v=SxU-Q00UwXc&t=1s" target='_blank' rel='noopener noreferrer'>Video</a>
						<ul>						
							<li>Utilized Ruby on Rails and PostgreSQL to create an API to manage users and app data</li>
							<li>Implemented JWT to provide users with security and to allow them to preserve logins </li>
							<li>Utilized React-Native to create a snappy cross-platform mobile app</li>
						</ul>
					</Grid.Column>
				</Grid.Row>


			</Grid>


			


 
    </Segment>
}

export default Project;