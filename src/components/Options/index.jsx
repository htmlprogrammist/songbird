import React from 'react';
import styled from 'styled-components'
import Answer from './Answer';

const Variants = styled.div`
  grid-area: options;
  border: 1px solid #555555;
  border-radius: 0.5rem;
  background-color: #303030;
  padding: 1rem;
  
  .options-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
`

const Options = (props) => {
  return (
    <Variants>
      <ul className="options-list">
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
      </ul>
    </Variants>

  );
}

export default Options;
