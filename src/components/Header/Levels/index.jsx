import React from 'react';
import styled from 'styled-components'
import levels from './../../../data/levels';
import LvlUnit from './LvlUnit';

const LevelsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
`

const Levels = (props) => {
  return (
    <LevelsList>
      <LvlUnit title={levels[0]} level={props.level} number='0'/>
      <LvlUnit title={levels[1]} level={props.level} number='1'/>
      <LvlUnit title={levels[2]} level={props.level} number='2'/>
      <LvlUnit title={levels[3]} level={props.level} number='3'/>
      <LvlUnit title={levels[4]} level={props.level} number='4'/>
      <LvlUnit title={levels[5]} level={props.level} number='5'/>
    </LevelsList>
  );
}

export default Levels;
