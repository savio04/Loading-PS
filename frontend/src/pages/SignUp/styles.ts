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
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
      margin-bottom: 24px;
    }
      a{
        color: #F4EDE8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover{
          color: ${shade(0.2,'#F4EDE8')}
        }
      }
  }

  > a{
    color: #F4EDE8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover{
      color: ${shade(0.2, '#F4EDE8')}
    }
    svg{
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backImage}) center;
  background-size: cover;
`;