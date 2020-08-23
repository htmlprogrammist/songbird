import React from 'react';
import styled from 'styled-components'

const Grade = styled.li`
  width: 162px;
  padding: 0.5rem;
  text-align: center;
  background-color: #007c5d;
`

const LevelItem = ({level, number, title}) => {
  if (level === number) {
    return <Grade className='is-active'>{title}</Grade>
  } else {
    return <Grade>{title}</Grade>
  }
}

export default LevelItem;
