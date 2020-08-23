import React from 'react';
import styled from 'styled-components'
import img from './../../assets/mystery-bird.png';

const Img = styled.img`
  width: 150px;
`

const Image = ({isHidden, className, url}) => {
  if (isHidden) {
    return (
      <Img className={`${className} img`} src={img} alt="answer-bird"/>
    )
  } else {
    return (
      <Img className={`${className} img`} src={url} alt="answer-bird"/>
    )
  }
}

export default Image;
