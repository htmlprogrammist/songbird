import React from 'react';
import styled from 'styled-components'

const Score = styled.section`
  align-self: center;
  
  p {
    font-size: 19px;
  }
  .current-score-point {
    color: #00bc8c;
  }
`

function Scorepoints({currentScore}) {
  return (
    <Score>
      <p>Score: {currentScore}</p>
    </Score>
  );
}

export default Scorepoints;
