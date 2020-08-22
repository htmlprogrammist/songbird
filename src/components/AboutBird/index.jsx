import React from 'react';
import styled from 'styled-components'
import birdsData from './../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import Image from './../Image';

const Description = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-area: aboutbird;
  background-color: #303030;
  border: 1px solid #555555;
  padding: 1rem;
  border-radius: 0.5rem;
  align-items: top;
  grid-template-areas: 'image name'
                       'audio audio'
                       'info info';
  
  .description-img {
    padding-bottom: 1rem;
    grid-area: image;
  }
  
  .description-title {
    grid-area: name;
    align-self: center;
    text-align: center;
    padding: 1rem;
  }
  
  .description-txt {
    grid-area: info;
    align-items: center;
  }
`
const AboutBird = ({level, choice}) => {
  let chosenItem = choice || '-1';

  if (chosenItem === '-1') {
    return (
      <div className='description'>
        <p>Прослушайте пение и выберите птицу из списка:</p>
      </div>
    )
  } else {
    const {audio, image, name, species, description} = birdsData[level][chosenItem];

    return (
      <Description>
        <Image
          className="description-img"
          url={image}
        />
        <div className="description-title">
          <div>{name}</div>
          <hr/>
          <div>{species}</div>
        </div>
        <AudioPlayer
          autoPlayAfterSrcChange={false}
          showJumpControls={false}
          src={audio}
        />
        <p className="description-txt">{description}</p>
      </Description>
    );
  }
}

export default AboutBird;
