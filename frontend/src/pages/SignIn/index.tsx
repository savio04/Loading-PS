import React, { FormEvent, useContext, useState } from 'react'
import { Content, Container, Background } from './styles'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


const SignIn: React.FC = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const Authcontext = useContext(AuthContext)
  const { signInContext,user,isError } = Authcontext

  console.log(user)
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await signInContext({
      email,
      password
    })
  }

  return (
    <Container>
      <Content>
        <form onSubmit = {handleSubmit}  method = "post" >
          <h1>Fazer Login</h1>

          {isError && <p>Email ou senha ivalidos</p>}

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

          <button type = 'submit' >Enviar</button>

        </form>

        <Link to="/signIn">
          Cadastrar-se
          <FiLogIn size = {20} />
        </Link>
      </Content>
      
      <Background />
    </Container>
  )
} 

export default SignIn