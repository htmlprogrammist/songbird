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
  
  .is-active {
    background-color: #5cb064;
  }
`

const LevelItem = (props) => {
  if (props.level === props.number) {
    return <Grade className='item is-active'>{props.title}</Grade>
  } else {
    return <Grade>{props.title}</Grade>
  }
}

export default LevelItem;
