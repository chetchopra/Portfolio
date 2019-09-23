import React from 'react'
import { 
	Segment, 
	Header, 
    Icon,
    Divider 
} from 'semantic-ui-react';

import Experience from './Experience'
import Education from './Education';
import Skills from './Skills'
import PersonalStatement from './PersonalStatement'

import resume from '../../assets/ResumeChet.pdf'

const Resume = props => {

    return <Segment className='section-holder'>
        <Header as='h1' dividing  textAlign='center'>
            <Header.Content>Resume</Header.Content>
            <a href={resume} style={styles.resumeDownload} target='_blank' rel='noopener noreferrer'>PDF</a>
        </Header>

        <PersonalStatement/>
        <Divider section />

        <Header as='h2' dividing>
            <Header.Content>Experience</Header.Content>
        </Header>
		<Experience/>

        <Header as='h2' dividing style={styles.resumeSectionHeader}>
            <Header.Content>Education</Header.Content>
        </Header>
        <Education/>

        <Header as='h2' dividing style={styles.resumeSectionHeader}>
            <Header.Content>Skills</Header.Content>
        </Header>
        <Skills/>
    </Segment>
}

const styles = {
    resumeSectionHeader: {
        paddingTop: '2%'
    },
    resumeDownload: {
        float: 'right'
    }
}

export default Resume;