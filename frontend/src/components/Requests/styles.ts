import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  width: 100%;

  span{
    display: flex;
    align-items: center;
    h2{
      margin-left: 10px;
    }
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  p{
    margin-top: 12px;
    max-width: 250px;
    b{
      margin-left: 6px;
    }
  }
  hr{
    margin-top: 25px;
  }

`;

export const Footer = styled.footer`
  margin-top: 10px;
 
  a{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #9466FF;
      border: none;
      color: #FFF;
      padding: 10px;
      border-radius: 10px;
      height: 40px;
      font-size: 14px;
      margin-top: 10px;
      text-decoration: none;
      transition: background-color 0.2s;

      svg{
        margin-left: 10px;
      }

      &:hover{
        background-color: ${shade(0.2,'#9466FF')}
      }
  }
`;