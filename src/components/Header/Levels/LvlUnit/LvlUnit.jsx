import React from 'react';
import styled from 'styled-components'

const Grade = styled.li`
  width: 120px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  margin-right: 0.5rem;
  background-color: #3d7270;
  border-radius: 0.5rem;
`

const LevelItem = ({level, number, title}) => {
  if (level === number) {
    return <Grade className='is-active'>{title}</Grade>
  } else {
    return <Grade>{title}</Grade>
  }
}

export default LevelItem;
