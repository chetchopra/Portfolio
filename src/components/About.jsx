import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react';

const About = props => {

    return <Segment className='section-holder'>
        <Header as='h1' dividing icon textAlign='center'>
            <Header.Content>About</Header.Content>
        </Header>

        <p>I've always been a bit of a tinkerer. When I was in college I thought I wanted to be an Electrical Engineer but physics 
            was not my thing and I found that I really enjoyed a Computer Science course I took. So I switched majors.</p>

        <p>After graduation, I created and taught curriculum for a youth robotics program at UWT. After that I spent 2.5 years as a 
            Software Service Engineer, while I did well and enjoyed it, I just couldn't go of my desire to be on a development team 
            that ships a live product. So I did some research and figured out what technologies I needed to learn in order to be 
            competitive on the job market.</p>

        <p> Now I spend my time building upon my skills making side projects, while looking for work!</p>
 
    </Segment>
}

export default About;