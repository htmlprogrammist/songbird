import React from 'react';
import styled from 'styled-components'
import Image from './../Image';

const Mystery = styled.section`
  grid-area: question;
  background-color: #303030;
  border-radius: 0.5rem;
  border: 1px solid #555555;
  padding: 1rem;
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'image name'
                       'audio audio';
  
  .mystery-img {
    grid-area: image;
  }

  .mystery-title {
    grid-area: name;
    align-self: center;
    text-align: center;
    font-size: 2rem;
  }
`

const Question = () => {
  return (
    <Mystery>
      <Image className='mystery-img'/>
      <span className='mystery-title'>******</span>
    </Mystery>
  );
}

export default Question;
