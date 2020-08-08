import React from 'react';
import styled from 'styled-components'
import LevelItem from './LevelItem';

const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  margin: 0;
`

function Levels() {
  return (
    <LevelsList>
      <LevelItem isActive/>
      <LevelItem/>
      <LevelItem/>
      <LevelItem/>
      <LevelItem/>
      <LevelItem/>
    </LevelsList>
  );
}

export default Levels;
