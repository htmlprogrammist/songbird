import React from 'react';
import styled from 'styled-components'
import Image from './../Image';
import birdsData from './../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Mystery = styled.section`
  grid-area: question;
  background-color: #303030;
  border-radius: 0.5rem;
  border: 1px solid #555555;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'image name'
                       'audio audio';
  
  .mystery-img {
    padding-bottom: 1rem;
    grid-area: image;
  }

  .mystery-title {
    grid-area: name;
    align-self: center;
    text-align: center;
    font-size: 2rem;
  }
`

const Question = ({rightAnswer, level, visibility}) => {
  const {audio, image, name} = birdsData[level][rightAnswer];

  return (
    <Mystery>
      <Image
        className='mystery-img'
        isHidden={(!visibility)}
        url={image}
      />
      <p className='mystery-title'>{(visibility) ? name : '********'}</p>
      <AudioPlayer
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        src={audio}
      />
    </Mystery>
  );
}

export default Question;
