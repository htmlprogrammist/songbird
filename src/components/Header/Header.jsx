import React from 'react'
import styled from 'styled-components'
import logo from "./../../assets/logo.png";
import Scorepoints from './Scorepoints/Scorepoints';
import Levels from './Levels/Levels';

const Nav = styled.header`
  grid-area: header;
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

const Header = ({level, currentScore}) => {

  return (
    <Nav>
      <nav>
        <img className="logo" src={logo} alt="logo"/>
        <Scorepoints currentScore={currentScore}/>
      </nav>
      <Levels level={level}/>
    </Nav>
  )
}

export default Header
