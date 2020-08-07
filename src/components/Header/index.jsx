import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #000;
`

function Header(props) {
  return (
    <header>
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
    </header>
  )
}

export default Header
