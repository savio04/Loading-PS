import styled from 'styled-components'
import {shade} from 'polished'


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
    border-radius: 20px;
    position: relative;
    padding: 40px;
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    header{
      h2{
        text-align: center;
        margin-bottom: 20px;
      }
    }

    button{
      position: absolute;
      right: 20px;
      top: 20px;
      border: none;
      background-color: transparent;
    }

    @media(max-width: 500px){
      width: 96%;
    }

    main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Card = styled.span`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px;
  background-color: #E5E5E5;
  border-radius: 10px;
  margin-bottom: 15px;

  header{
    display: flex;
    align-items: center;
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    h3{
      font-size: 18px;
      margin-left: 15px;
    }
  }

  span{
    display: flex;
    color: #312E38;
    p{
      margin-left: 6px;
      color: #9466FF;
    }
  }
`;

export const ButtonHandle = styled.span`
  background-color: ${shade(0.2,'#E5E5E5')};
  margin-top: 20px;
  width: 60%;
  cursor: pointer;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #312E38;
  font-size: 18px;
  padding: 10px;
  transition: background-color 0.2s;

  &:hover{
    background-color: ${shade(0.4, '#E5E5E5')}
  }

  & +& {
    margin-top: 10px;
    background-color: #9466FF;
    font-size: 18px;
    padding: 8px;

    &:hover{
      background-color: ${shade(0.4, '#9466FF')}
    }
  }
`;