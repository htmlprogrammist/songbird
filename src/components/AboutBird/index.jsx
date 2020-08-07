import React from 'react';
import styled from 'styled-components'

const Description = styled.section`
  grid-area: aboutbird;
  background-color: #303030;
  border: 1px solid #444444;
  padding: 1rem;
  border-radius: 0.5rem;
`
const AboutBird = (props) => {
  return (
    <Description>Вау какая увлекательная информация О ПТИЦЕ!!! Птицы птицы чирик чикрик
    </Description>
  );
}

export default AboutBird;
