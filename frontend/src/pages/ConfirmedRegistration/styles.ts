import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
  background-color: #9466FF;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1{
    margin-bottom: 5px;
  }
  p{
    margin-bottom: 20px;
    font-size: 18px;
  }
  svg{
    color: #04D361;
    margin-bottom: 5px;
  }

  button{
    padding: 10px;
    font-size: 20px;
    border-radius: 10px;
    background: #E5E5E5;
    color: #312E38;
    border: none;
    transition: background-color 0.2s;

    &:hover{
      background-color: ${shade(0.2, '#E5E5E5')}
    }
  }
`;