import React from 'react'
import styled from 'styled-components'
import logo from "./../../assets/logo.png";
import Scorepoints from './Scorepoints';
import Levels from './Levels';

const Nav = styled.header`
  grid-area: header;
  background-color: #303030;
  border: 1px solid #555555;
  border-radius: 0.5rem;
  padding: 0 1rem;

  nav {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: block;
    height: 100px;
  }
`

const Header = (props) => {
  return (
    <Nav>
      <nav>
        <img className="logo" src={logo} alt="logo"/>
        <Scorepoints/>
      </nav>
      <Levels/>
    </Nav>
  )
}

export default Header
