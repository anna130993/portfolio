import React from 'react';
import {Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class MainMenu extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand href='/'>Anna Podsiadło</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto align-items-center' navbar>
              <NavItem>
                <NavLink href='/about-me'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/projects'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/contact'>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainMenu;
