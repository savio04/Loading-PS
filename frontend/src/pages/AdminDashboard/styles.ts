import styled from 'styled-components'
import { shade } from 'polished'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFF;

  header{
    display: flex;
    width: 100%;
    height: 130px;
    justify-content: center;
    align-items: center;
    background-color: #9466FF;
    padding: 8px;
    border-bottom: 2px solid ${shade(0.1, '#9466FF')};
    div{
      width: 700px;
      display: flex;
      justify-content: space-between;
      h1{
      font-size: 38px;
      color: #312E38;
      color: #FFF;
    }
    }
  }

  main{
    width: 700px;
    background-color: ${shade(0.03, '#FFF')};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    margin-top: -28px;
    div{
    margin-top: 14px;
    width: 480px;
  }
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  a{
    text-decoration: none;
    padding: 15px;
    border-radius: 10px;
    color: #FFF;
    font-size: 18px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;

    &:hover{
      background-color: ${shade(0.2, '#9466FF')}
    }
  }

  button{
    border:none;
    padding: 15px;
    border-radius: 10px;
    color: #FFF;
    font-size: 18px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    margin-left: 15px;
    svg{
      margin-left: 8px;
    }

    &:hover{
      background-color: ${shade(0.2, '#9466FF')}
    }
  }
`;