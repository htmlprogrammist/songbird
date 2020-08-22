import React from 'react';
import styled from 'styled-components'

const Score = styled.section`
  align-self: center;
  
  .current-score-point {
    color: #5cb064;
  }
`

function Scorepoints({currentScore}) {
  return (
    <Score>
      <p>Score: </p>
      <p className="current-score-point">{currentScore}</p>
    </Score>
  );
}

export default Scorepoints;
