import React from 'react';
import styled from 'styled-components'

const Description = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr auto;
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
const AboutBird = (props) => {
  return (
    <Description>
      <div className="description-title">
        <div>Bird</div>
        <hr />
        <div>Bird</div>
      </div>
      <p className="description-txt">Всё это добро с чирик чирик теперь здесь.</p>
    </Description>
  );
}

export default AboutBird;
