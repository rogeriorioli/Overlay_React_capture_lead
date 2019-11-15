import React from 'react';
import useClipboard from "react-use-clipboard";

import { Container } from './styles';

const redirectTo = (_link) => {
    
    setTimeout(function () {
      const url = 'https://www.livrariart.com.br/?utm_source=shopback&utm_medium=cpc&utm_campaign=shopback&utm_term=overlay_lead'  
      
      window.top.location = url;
      window.top.spl.click_only(url);
    }, 800);
    
  };
  
  const Thanx = ({hide}) => {
    const [isCopied, setCopied] = useClipboard("CADASTROFRETEGRATIS");
    
  return( 
  <Container>

   <div className={`${hide}`}>
    <h2 className={`${hide}`} onClick={setCopied}>CADASTROFRETEGRATIS</h2>
      </div> 
    <p className={`${hide}`}>*Cupom válido para apenas 1 compra.</p> 
   
    {isCopied ?
    <React.Fragment>
       <span className={`${hide  } tip copied`}>Copiado com sucesso! boas compras :D </span> 
       <button className={`${hide}`} onClick={() => redirectTo(window.top.location.href)}>continuar compra</button>
    </React.Fragment>
    : ''}  
  </Container>

)};

export default Thanx;

