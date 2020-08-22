import React from 'react'
import styled from 'styled-components'

const Variant = styled.li`
  border-radius: .5rem;
  border: 1px solid #444444;
  margin-bottom: .5rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  .answers-option__checkbox {
    position: relative;
    top: 17px;
    left: 8px;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #444444;
  }
  
  .answers-option__title {
    margin-left: 1rem;
  }
`

const Option = ({cb, style, name, line}) => {

  return (
    <Variant onClick={() => {
      cb(line)
    }}>
      <div className='answers-option__checkbox' style={style}>
      </div>
      <p className='answers-option__title'>{name}</p>
    </Variant>
  );
}

export default Option;
