import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="nav-container">
        <Navbar light toggleable>
          <NavbarToggler right onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/docs">Docs</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">Procurement</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#/token-launch">Token Sale</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
