import styled from 'styled-components'

export const Div = styled.button`
  max-width: 500px;
  height: 100px;
  background-color: #FFF;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.2s;
  text-decoration: none;
  color: #312E38;
  border: none;
  cursor: pointer;

  & {
    margin-bottom: 20px;
  }

  p{
    font-size: 20px;
    margin-right: 15px;
    color: #312E38;
  }

  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 15px;
  }
  svg{
    margin-left: 10px;
    margin-right: 10px;
  }

  &:hover{
    transform: translateX(10px);
  }

  @media(max-width: 500px){
    cursor: none;

    &:hover{
      transform: none;
    }
  }

`;