import React from 'react';
import styled from 'styled-components'

const Grade = styled.li`
  min-width: 100px;
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

function LevelItem(props) {
  if (props.isActive) {
    return <Grade className="is-active">Активный</Grade>
  } else {
    return <Grade>Пассивный</Grade>
  }
}

export default LevelItem;
