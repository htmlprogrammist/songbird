import React from 'react';
import styled from 'styled-components'

const Score = styled.section`
  align-self: center;
  
  .counter {
    color: #fff;
  }
`

function Scorepoints() {
  return (
    <Score>
      <span>Score: </span>
      <span className="counter">0</span>
    </Score>
  );
}

export default Scorepoints;
