import styled from 'styled-components'
import { shade } from 'polished'
import backSingIn from '../../assets/backSignIn.png'

export const Container = styled.div`
  height: 100vh;
  background: #9466FF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 60%;
  background: url(${backSingIn}) #E5E5E5 no-repeat 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  form{
    width: 320px;
    margin-top: 30px;
    margin-bottom: 40px;

    h1{
      text-align: center;
      margin-bottom: 20px;
    }
    button{
      width: 100%;
      height: 60px;
      margin-top: 15px;
      border: none;
      border-radius: 15px;
      background-color: #9466FF;
      color: #FFF;
      transition: background-color 0.2s;
      font-size: 18px;

      &:hover{
        background-color: ${shade(0.2, '#9466FF')}
      }
    }
  }

  a{
    color: #312E38;
    display: block;
    margin-bottom: 40px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover{
      color: ${shade(0.2, '#312E38')}
    }
    svg{
      margin-right: 16px;
    }
  }

  @media(max-width: 1200px){
    width: 90%;
    background: #E5E5E5;
  }
`;