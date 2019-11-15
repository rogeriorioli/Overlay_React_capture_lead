import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import { Container } from './styles';

const Chamada = ({hide, frase , content}) => (
  
  <Container>
    <p >
      { ReactHtmlParser(frase) }
      <span>
        {ReactHtmlParser(content)}
      </span>
    </p>
  </Container>
  
 ) ;

export default Chamada;
