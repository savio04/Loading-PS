import React, { FormEvent, useState } from 'react'
import { Container, Content } from './styles'
import Input from '../../components/Input'
import { Link,useHistory } from 'react-router-dom'
import { FiArrowLeft,FiMail,FiUser,FiPhone,FiLock } from 'react-icons/fi'
import api from '../../service/api'

const SingUp: React.FC = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [cellphone,setCellphone] = useState('')
  const [password,setPassword] = useState('')
  const [hasError,setHasError] = useState(false)
  const hystory = useHistory()

  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault()
    try{
      await api.post('/signup', {
        name,
        email,
        cellphone,
        password
      })
      setHasError(false)
      hystory.push('/created')
    }catch(err){
      console.log(err)
      setHasError(true)
    }

  }

  return(
    <Container>
     <Content>
      <form onSubmit ={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          {hasError && <p>Email ja existente</p>}
          <Input 
            name = 'name' 
            placeholder = 'Nome' 
            type = 'text' 
            IconInput = {FiUser}
            value = {name}
            onChange = {(event) => setName(event.target.value)}
          />
          <Input 
            name = 'email'
            placeholder = 'E-mail' 
            type = 'email' 
            IconInput = {FiMail}
            value ={email}
            onChange = {(event) => setEmail(event.target.value)}
          />
          <Input 
            name = 'cellphone' 
            placeholder = 'Telefone' 
            type = 'tel' 
            IconInput = {FiPhone} 
            value = {cellphone}
            onChange = {(event) => setCellphone(event.target.value)}
            />
          <Input 
            name = 'password' 
            placeholder = 'Senha' 
            type = 'password' 
            IconInput = {FiLock} 
            value = {password}
            onChange = {(event) => setPassword(event.target.value)}
          />

          <button type = 'submit' >Cadastrar</button>
        </form>
        <Link to="/">
            <FiArrowLeft size = {20} />
            Voltar para o login
        </Link>
     </Content>
    </Container>

  )
}

export default SingUp