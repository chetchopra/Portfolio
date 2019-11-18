import _ from 'lodash'
import React, { Component } from 'react'
import About from './components/About'
import Resume from './components/resume/Resume'
import SocialAnimated from './components/SocialAnimated'
import Project from './components/Project'

//Cringe equals my face
import Cringe from './assets/cringe.jpg'

import {
  Container,

  Grid,
  Header,

  Image,

  Menu,

  Visibility,

} from 'semantic-ui-react'

import {
  HashRouter as Router,
  Switch, 
  Route, 
  NavLink
} from 'react-router-dom'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: 'gray',
  position: 'relative',
}

const fixedMenuStyle = {
  backgroundColor: 'gray',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',

}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
  textAlign: 'center',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '1200px',
}

const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
)

const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (

      <Router>
      <div>
        <style>
          {`
          html, body {
            background: #7c98a1;
          }
        `}
        </style> 

        <Container  style={{ marginTop: '3em' }}>
          <Grid>
            <Grid.Column width={4}>
              <Image src={Cringe} size='medium' circular />
            </Grid.Column>
            <Grid.Column width={12}>
              <div style={styles.header}>
                <Header as='h1' style={styles.nameHeader}>Chetanya Chopra</Header>
                <p style={styles.quoteHeader}>
                “The computer was born to solve problems that did not exist before.”
                — Bill Gates
                </p>
                <SocialAnimated/>
              </div>
            </Grid.Column>
          </Grid>
        </Container>




        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
          offset={45}
        >
          <Menu 
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}

          >
            <Container text  style={styles.navBar}>
              <Menu.Item as={NavLink} to='/about' exact activeClassName='active'>About</Menu.Item>
              <Menu.Item as={NavLink} to='/projects' exact activeClassName='active'>Projects</Menu.Item>
              <Menu.Item as={NavLink} to='/resume' exact activeClassName='active'>Resume</Menu.Item>

              {/* {menuFixed ? <Menu.Item><Icon name='github'/></Menu.Item> : ""} */}
            </Container>
          </Menu>

        </Visibility>

        <Container >

          <Switch>
            <Route path='/' exact render={null} />
            <Route path='/about' exact render={props => <About {...props} />} />
            <Route path='/resume' exact render={props => <Resume {...props} />} />
            <Route path='/projects' exact render={props => <Project {...props} />} />
  
          </Switch>
         
        </Container>
        
      </div>
      </Router>
    )
  }
}

const styles = {
  header: {
    textAlign: 'center',
    float: 'left',
    marginTop: '4%'
  },
  nameHeader: {
    fontSize: 50
  },
  quoteHeader: {
    fontSize: 20
  },
  navBar: {
    fontSize: 20, 
    fontWeight: 'bold'
  }
}
