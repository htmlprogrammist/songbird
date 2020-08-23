import React from 'react';
import styled from 'styled-components'

const Btn = styled.div`
  grid-area: ctrlkey;
  background-color: #303030;
  border-radius: 0.5rem;
  border: 1px solid #555555;
  padding: 1rem;
  text-align: center;
`

const CtrlKey = ({isActive, cb, message}) => {
  const divStyleActive = {
    backgroundColor: '#5cb064',
    cursor: 'pointer'
  }

  const divStyleDisabled = {
    backgroundColor: '#303030'
  }

  return (
    <Btn
      style={(isActive) ? divStyleActive : divStyleDisabled}
      onClick={cb}
    >
      {message}
    </Btn>
  );
}

export default CtrlKey;
