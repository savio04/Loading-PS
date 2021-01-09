import React, { FormEvent, useState } from 'react'
import { Container, Content } from './styles'
import Input from '../../components/Input'
import { Link,useHistory } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'
import api from '../../service/api'

const AddProcedure: React.FC = () => {
  const tokenLocal = localStorage.getItem('@Plataform:token')
  const token =`Bearer ${tokenLocal}`

  const [name,setName] = useState('')
  const [avatar,setAvatar] = useState('')
  const [description,setDescription] = useState('')
  const [value,setValue] = useState('')
  const [hasError,setHasError] = useState(false)
  const hystory = useHistory()

  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault()

    console.log(name)
    console.log(avatar)
    console.log(description)
    console.log(value)

    try{
      await api.post('procedure',{
        name,
        avatar,
        description,
        value: Number(value)
      },{headers:{Authorization: token}})
      setHasError(false)
      alert('serviço adicionado com sucesso')
      hystory.push('/dashboard')
    }catch(err){
      console.log(err.message)
      setHasError(true)
    }

  }

  return(
    <Container>
     <Content>
      <form onSubmit ={handleSubmit}>
          <h1>Adicionar serviço</h1>
          {hasError && <p>Ocorreu um Erro!!!!!!</p>}
          <Input 
            name = 'name' 
            placeholder = 'Nome' 
            type = 'text' 
            value = {name}
            onChange = {(event) => setName(event.target.value)}
          />
          <Input 
            name = 'avatar'
            placeholder = 'Link da imagem' 
            type = 'text' 
            value ={avatar}
            onChange = {(event) => setAvatar(event.target.value)}
          />
          <textarea 
            name = 'description' 
            placeholder = 'Descrição'  
            value = {description}
            onChange = {(event) => setDescription(event.target.value)}
            />
          <Input 
            name = 'value' 
            placeholder = 'Valor' 
            type = 'text' 
            value = {value}
            onChange = {(event) => setValue(event.target.value)}
          />

          <button type = 'submit' >Adicionar</button>
        </form>
        <Link to="/dashboard">
            <FiArrowLeft size = {20} />
            Voltar
        </Link>
     </Content>
    </Container>

  )
}

export default AddProcedure