import React from 'react'
import styled from 'styled-components'

const Variant = styled.li`
  padding: .5rem;
  border-radius: .5rem;
  border: 1px solid #444444;
  margin-bottom: .5rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  Variant:hover {
    background-color: #282c34;
  }

  .answers-option__checkbox {
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #444444;
  }
  
  .answers-option__title {
    margin-left: 1rem;
  }
`

const Option = (props) => {
  const handleClick = props.cb;
  const line = props.line;

  return (
    <Variant onClick={() => {
      handleClick(line)
    }}>
      <div className='options-answer__checkbox' style={props.style}>
      </div>
      <p className='options-answer__title'>{props.name}</p>
    </Variant>
  );
}

export default Option;
