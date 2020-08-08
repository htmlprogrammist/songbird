import React from 'react'
import styled from 'styled-components'

const Variant = styled.li`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #444444;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
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

function Option() {
  return (
    <Variant>
      <div className='options-answer__checkbox'>
      </div>
      <span className='options-answer__title'>title</span>
    </Variant>
  );
}

export default Option;
