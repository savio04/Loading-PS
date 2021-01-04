import React from 'react'
import { Content, Container, Background } from './styles'
import { FiArrowLeft, FiUser } from 'react-icons/fi'
import Input from '../../components/Input'


const SignUp: React.FC = () => {

  return (
    <Container>
      <Content>
        <form >
          <h1>Login</h1>

          <Input name = 'name' placeholder = 'Nome' IconInput ={FiUser} />
          <Input name = 'email' placeholder = 'E-mail' />
          <Input name = 'password' type = 'password' placeholder = 'Senha' />

          <button type = 'submit'>Enviar</button>
        </form>

        <a href="/">
          <FiArrowLeft size = {20} />
          Fazer Cadastro
        </a>
      </Content>
      
      <Background />
    </Container>
  )
} 

export default SignUp