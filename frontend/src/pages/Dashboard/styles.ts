import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    margin-top: 60px;
    margin-bottom: 60px;
    font-size: 45px;
    padding: 4px;
    border-bottom: 2px solid #312E38;
    color: #312E38;
  }

  div{
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media(max-width: 500px){
    h1{
      font-size: 30px;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export const ButtonCart = styled.div`
  position: fixed;
  bottom: 80px;
  right: 0;
  width: 84px;
  height: 54px;
  background: #FFF;
  border-radius:  10px 0 0 10px ;

  button{
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 20px;
    transition: transform 0.2s;

    &:hover{
      transform: translateX(4px)
    }
    span{
      position: absolute;
      top: 0;
      right: 14px;
      background: #000;
      color: #FFF;
      font-size: 18px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }

  @media(max-width: 800px){
    bottom: 30px;
    right: 0;
    background: #312E38;
    button{
      cursor: none;
      color: #FFF;

      span{
        background: #FFF;
        color: #312E38;
      }
      &:hover{
        color: #FFF;
        transform: none;
      }
    }
  }
`;