import React from 'react';
import styled from 'styled-components'
import Answer from './Answer';
import birdsData from './../../data/birdsData';

const Variants = styled.section`
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
  const cb = props.cb;

  return (
    <Variants>
      <ul className="options-list">
        {
          props.currentState.map((item, index) => {
            const style = {
              backgroundColor: item
            }
            return (
              <Answer
                cb={cb}
                style={style}
                key={birdsData[props.level][index].id}
                name={birdsData[props.level][index].name}
                line={'' + index}
              />
            )
          })
        }
      </ul>
    </Variants>

  );
}

export default Options;
