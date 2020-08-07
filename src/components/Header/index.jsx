import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  grid-area: header;
  background-color: #303030;
  border: 1px solid #444444;
  padding: 1rem;
  border-radius: 0.5rem;

  ul {
    display: flex;
    flex-direction: row;
    padding-right: 20px;
  }

  li {
    text-decoration: none;
  }
`

const Header = (props) => {
  return (
    <Nav>
      <ul>
        <li>Разминка</li>
        <li>Воробьиные</li>
        <li>Лесные птицы</li>
        <li>Певчие птицы</li>
        <li>Хищные птицы</li>
        <li>Морские птицы</li>
      </ul>
    </Nav>
  )
}

export default Header
