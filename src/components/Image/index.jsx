import React from 'react';
import styled from 'styled-components'
import img from './../../assets/mystery-bird.png';

const Img = styled.img`
  height: 150px;
`

const Image = (props) => {
  if (props.isHidden) {
    return (
      <Img className={`${props.className} img`} src={img} alt="answer-bird"/>
    )
  } else {
    return (
      <Img className={`${props.className} img`} src={props.url} alt="answer-bird"/>
    )
  }
}

export default Image;
