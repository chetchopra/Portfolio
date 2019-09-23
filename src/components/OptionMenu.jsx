import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link, 
  Redirect,
  NavLink
} from 'react-router-dom'

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu  tabular>
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
						onClick={this.handleItemClick}
						as={NavLink} exact to='/about'
          />
          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
						onClick={this.handleItemClick}
						as={NavLink} exact to='/projects'
          />
					<Menu.Item
            name='Resume'
            active={activeItem === 'Resume'}
						onClick={this.handleItemClick}
						as={NavLink} exact to='/resume'
          />
        </Menu>

				          {/* <Menu pointing secondary
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}

          >
            <Container text>
              <Menu.Item as={NavLink} exact to='/about' activeClassName='active'>About</Menu.Item>
              <Menu.Item as={NavLink} exact to='/projects' activeClassName='active'>Projects</Menu.Item>
              <Menu.Item as={NavLink} exact to='/resume' activeClassName='active'>Resume</Menu.Item>
            </Container>
          </Menu> */}

        <Segment attached='bottom'>
          
        </Segment>
      </div>
    )
  }
}
