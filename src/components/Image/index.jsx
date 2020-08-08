import React from 'react';
import styled from 'styled-components'
import img from './../../assets/mystery-bird.png';

const Img = styled.img`
  height: 150px;
`

function Image(props) {
  return (
    <Img className={`${props.className}`} src={img} alt="answer-bird"/>
  );
}

export default Image;
