import styled from 'styled-components'
import backImage from '../../assets/Backgroundsignup.png'
import { shade } from 'polished'


export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #E5E5E5;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  //place-content: center; é a mesma coisa que justify-content e align-items
  width: 100%;
  max-width: 700px;

  form{
    width: 320px;
    text-align: center;

    p{
      color: red;
      margin-bottom: 10px;
      font-size: 18px;
    }

    h1{
      margin-bottom: 24px;
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

  > a{
    color: #312E38;
    display: block;
    margin-top: 40px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover{
      color: ${shade(0.2, '#312E38')}
    }
    svg{
      margin-left: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backImage}) center;
  background-size: cover;
`;