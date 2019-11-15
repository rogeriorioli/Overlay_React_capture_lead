import React , { useState } from 'react';

import {MdKeyboardArrowRight} from 'react-icons/md'
import axios from 'axios'
import Chamada from '../Chamada'
import Thanx from '../Thanx'
import { Container } from './styles';


export default function Form() {
   const [ getLead , setGetLead ] = useState({
     visible : true  
   })
      
     
      const sendFormLead = async (e) => {
        e.preventDefault(); 
        setGetLead(getLead.visible !== true)
        await axios.post('add your service')
        console.log(getLead)
      }   

      function inputChange(e) {
        e.persist();      
        setGetLead(getLead => ({...getLead, [e.target.name] : e.target.value }))
      }

  return (
   <Container >
         {getLead.visible !== true  ?
            <Chamada frase="Muito obrigada por <br/> efetuar seu cadastro!" content="Utilize o cupom abaixo e ganhe frete grátis em qualquer obra"/> :
            <Chamada frase="Cadastre-se e ganhe um<br /> cupom de frete grátis" content="RECEBA CONTEÚDOS E OFERTAS EXCLUSIVAS" />
        }         
         <Thanx hide={getLead.visible !== true ? 'show' : 'hide'}/>
            <form className={getLead.visible !== true ? 'hide' : 'show'} onSubmit={sendFormLead}>
            <input type="email" name="email" placeholder="Digite seu e-mail" onChange={inputChange}  required
            autoComplete="off"/>
            <button type="submit"><MdKeyboardArrowRight color="#fff" size={30} /></button> 
         </form>  
   </Container>
  );
}
