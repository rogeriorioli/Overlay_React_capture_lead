import styled from 'styled-components';

export const Container = styled.div `
      width : 400px;
      flex-grow: 0;
      form {
        width : 300px;
        margin : auto;
        border-radius: 20px;
        border : 1px solid orange;
        display : flex;

        input {
          width : 86% ;
          padding : 0 10px;
          display : block ;
          background-color: transparent;
          outline: none;
          border : none;
          color : #000;
   
          &:focus{
            outline : none;
            background : none;
          }   
          &::placeholder {
            color : #000;
            text-align : left;
            text-transform : uppercase;
          }
        }
        button {
          background-color: transparent;
          border : 1px solid orange;
          color : #fff;
          width : 40px;
          height: 40px;
          border-radius: 50%;
          margin : auto;
          display : block;
          position: relative;
          right : -5px;
          cursor : pointer;
          position: relative;
          background: orange;
          text-transform: uppercase;
        }
        &.hide {
            display : none ;
          }
      }

`;