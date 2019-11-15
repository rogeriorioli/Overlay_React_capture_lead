import styled from 'styled-components';

export const Container = styled.div `
  p {
      text-align :center;
      font-size: 12px;
      color : #333;
      margin : 10px 0;
    &.hide {
          display : none;
        }
  }
  h2{
    text-transform : uppercase;
    color : orange;
    text-align : center;
    font-size : 20px;
    display : block;
    width : 300px;
    border : 2px dashed orange;
    padding : 10px;
    margin : 0 auto;
    border-radius : 20px;
    cursor : copy;
    &.hide {
          display : none;
        }
  }
  .tip {
    display : block ;
    padding : 5px;
    width : 260px ;
    margin : auto;
    border : 1px solid #333;
    text-align : center;
    color : #fff;
    transition : all 0.5s;
    font-size : 13px;
    &.copied  {
      color : green;
      border : 1px solid green;
      transition : all 0.5s;
    }
    &.hide {
          display : none;
        }
  }
  button {
         background-color: orange;
          border : 1px solid #fff;
          color : #fff;
          padding : 15px 0;
          margin : auto;
          display : block;
          cursor : pointer;
          position: relative;
          text-transform: uppercase;
          transition : all 0.5s;
          opacity : 1;
          width : 260px ;
          margin : 30px auto;
          border-radius : 20px;
          &.hide {
          opacity : 0;
          margin :  0;
          transition : all 0.5s;
      }
  }
`;