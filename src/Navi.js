import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";
import {Link} from 'react-router-dom';

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/formdemo1">Form demo1</Link>
              <Link to="/formdemo2">Form demo2</Link>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary
              cart={this.props.cart}
              removeFromCart={this.props.removeFromCart}
            ></CartSummary>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
