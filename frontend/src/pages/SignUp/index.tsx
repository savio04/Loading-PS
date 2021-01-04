import React, { useState } from 'react'
import { Content, Container, Background } from './styles'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import Input from '../../components/Input'
import api from '../../service/api'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {

  const [hasError,setHasError] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  function handleError(){
    setHasError(true)
  }

  async function handleDate(){
    const response = await api.post('/signUp',{
      email,
      password
    })

    console.log(response.data)
  }

  return (
    <Container>
      <Content>
        <form action = '' >
          <h1>Fazer Login</h1>

          {hasError && <p>Email ou senha ivalidos</p>}

          <Input 
            name = 'email' 
            placeholder = 'E-mail' 
            IconInput = {FiMail}
            value = {email}
            onChange = {(event) => setEmail(event.target.value)}
          />
          <Input 
            name = 'password' 
            type = 'password' 
            placeholder = 'Senha' 
            IconInput = {FiLock}
            value = {password}
            onChange = {(event) => setPassword(event.target.value)}
          />

          <button onClick = {handleDate} type = 'button' >Enviar</button>

        </form>

        <Link to="/singIn">
          Cadastrar-se
          <FiLogIn size = {20} />
        </Link>
      </Content>
      
      <Background />
    </Container>
  )
} 

export default SignUp