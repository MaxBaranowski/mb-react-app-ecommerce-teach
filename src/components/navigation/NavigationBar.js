import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonCart } from "../buttons/ButtonCart";


class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item ml-5">
            <Link className="nav-link" to="/details">Details</Link>
          </li>
        </ul>
        <Link className="ml-auto" to="/cart">
          <ButtonCart>
            <span className="mr-2">
              <i className="fa fa-cart-plus"></i>
            </span>
            cart
                    </ButtonCart>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
    background: var(--main-blue-color);
    .nav-link{
        color: var(--main-white-color) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

export default NavBar;