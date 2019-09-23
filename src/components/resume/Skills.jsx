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

import ruby from '../../assets/ruby.svg'
import js from '../../assets/js.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import react from '../../assets/react.svg'
import sql from '../../assets/sql.svg'
import mysql from '../../assets/mysql.svg'


const Skills = props => {
    return (
			<Grid columns='three' divided>
				<Grid.Row>

					<Grid.Column>
						<div style={styles.column}>
							<h3><strong>Languages</strong></h3>
							<Divider section />

							<Image centered src={ruby} />
							<p><strong>Ruby</strong></p>
							<Divider section />

							<Image centered src={js} />
							<p><strong>JavaScript</strong></p>
						</div>
					</Grid.Column>

					<Grid.Column>
						<div style={styles.column}>
							<h3><strong>Web</strong></h3>
							<Divider section />
							<Image centered src={html} />
							<p><strong>HTML5</strong></p>
							<Divider section />
							<Image centered src={css} />
							<p><strong>CSS3</strong></p>
							<Divider section />
							<Image centered src={react} />
							<p><strong>React</strong></p>
							<Divider section />
							<Image centered src='https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg' />
							<p><strong>Ruby on Rails</strong></p>
						</div>
					</Grid.Column>

					<Grid.Column>
						<div style={styles.column}>
							<h3><strong>Databases</strong></h3>
							<Divider section />
							<Image centered src={sql} />
							<p><strong>SQL</strong></p>
							<Divider section />
							<Image centered src={mysql} />
							<p><strong>MySql</strong></p>
						</div>
					</Grid.Column>

				</Grid.Row>
			</Grid>
		);
}



const styles = {
	iconText: {
		paddingTop: '5%'
	},
	column: {
		textAlign: 'center',

	}
}

export default Skills;