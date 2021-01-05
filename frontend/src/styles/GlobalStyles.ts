import { createGlobalStyle } from 'styled-components'
import Background from '../assets/Background.png'

export default createGlobalStyle`
   *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: #E5E5E5 url(${Background}) no-repeat 100%;
    -webkit-font-smoothiing: antialiazed;
  }

  body,input {
    font-size: 16px;
    font-family: sans-serif;
  }

  button{
    cursor: pointer;
  }
`;