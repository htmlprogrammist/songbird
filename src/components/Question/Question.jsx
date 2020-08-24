import React from 'react';
import styled from 'styled-components'
import Image from './../Image/Image';
import birdsData from './../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';

const Mystery = styled.section`
  grid-area: question;
  background-color: #303030;
  border-radius: 0.5rem;
  border: 1px solid #555555;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: .5fr 2fr;
  grid-template-areas: 'image name'
                       'image audio';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'image name'
                         'audio audio';

    .mystery-img {
      width: 110px !important;
    }
  }
  
  .mystery-img {
    grid-area: image;
    width: 180px;
    border-radius: 10px;
  }

  .mystery-title {
    grid-area: name;
    align-self: center;
    text-align: center;
    font-size: 2rem;
  }
`

const Question = ({rightAnswer, level, visibility}) => {
  let { audio, image, name } = birdsData[level][rightAnswer];
  let audioRef = React.createRef()
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
        ref={audioRef}
        showJumpControls={false}
        src={audio}
      />
    </Mystery>
  );
}

export default Question;
