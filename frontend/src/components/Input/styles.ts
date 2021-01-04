import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: ${shade(0.1, '#E5E5E5')};
  border-radius: 15px;
  padding-left: 10px;
  height: 60px;
  svg{
    color: #312E38;
  }

  input{
    border: none;
    flex: 1;
    margin: 10px;
    background: transparent;
    color: #312E38;
  }

  & + &{
    margin-top: 10px;
  }
`;