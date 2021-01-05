import styled, { css } from 'styled-components'


export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index:10;
  width:100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    background-color: #FFF;
    height: 60%;
    width: 60%;
    border-radius: 20px;
    position: relative;

    @media(max-width: 500px){
      width: 96%;
    }

    button{
      position:absolute;
      right: 20px;
      top: 20px;
      border: none;
      background: none;

    }
    span{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      h2{
        font-size: 30px;
      }
    }
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 15px;
      margin-left: 15px;
      margin-top: 15px;
    }

    p{
      font-size: 20px;
      max-width: 700px;
      margin-left: 15px;
    }

    a{
      width: 120px;
      height: 60px;
      cursor: pointer;
      background-color: #9466FF;
      color: #FFF;
      padding: 10px;
      border-radius: 10px;
      position: absolute;
      right: 20px;
      bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
  }
`;