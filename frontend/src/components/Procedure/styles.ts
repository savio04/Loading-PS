import styled from 'styled-components'
import { shade} from 'polished'

export const Div = styled.div`
  width: 400px;
  background-color: #FFF;
  border-radius: 20px;
  display: flex;
  color: #312E38;
  padding: 15px;
  margin-bottom: 20px;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    h2{
      margin-left: 15px;
    }

  }

  p{
    text-align: justify;
  }

  button{
      display: flex;
      align-items: center;
      background-color: #9466FF;
      border: none;
      color: #FFF;
      padding: 10px;
      border-radius: 10px;
      height: 52px;
      font-size: 14px;
      margin-top: 20px;
      transition: background-color 0.2s;

      &:hover{
        background-color: ${shade(0.2,'#9466FF')}
      }
    }
`;