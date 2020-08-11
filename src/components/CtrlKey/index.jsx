import React from 'react';
import styled from 'styled-components'

const Btn = styled.div`
  grid-area: ctrlkey;
  background-color: #303030;
  border-radius: 0.5rem;
  border: 1px solid #555555;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
`

const CtrlKey = (props) => {
  const divStyleActive = {
    backgroundColor: '#5cb064'
  }

  const divStyleDisabled = {
    backgroundColor: '#3c4855'
  }

  return (
    <Btn
      style={(props.isActive) ? divStyleActive : divStyleDisabled}
      onClick={props.cb}
    >
      {props.message}
    </Btn>
  );
}

export default CtrlKey;
