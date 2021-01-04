import React from 'react'
import { Container, Content } from './styles'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { FiArrowLeft,FiMail,FiUser,FiPhone,FiLock } from 'react-icons/fi'

const SingIn: React.FC = () => {
  return(
    <Container>
     <Content>
      <form action="">
          <h1>Faça seu cadastro</h1>

          <Input name = 'name' placeholder = 'nome' type = 'text' IconInput = {FiUser}/>
          <Input name = 'email' placeholder = 'email' type = 'email' IconInput = {FiMail}/>
          <Input name = 'cellphone' placeholder = 'cellphone' type = 'tel' IconInput = {FiPhone} />
          <Input name = 'password' placeholder = 'password' type = 'password' IconInput = {FiLock} />

          <button>Cadastrar</button>
        </form>
        <Link to="/">
            <FiArrowLeft size = {20} />
            Voltar para o login
        </Link>
     </Content>
    </Container>

  )
}

export default SingIn