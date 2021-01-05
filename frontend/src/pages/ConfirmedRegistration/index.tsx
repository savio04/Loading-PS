import React from 'react'
import { Container } from './styles'
import { FiCheck } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

const ConfirmedRegistrtion: React.FC = () => {
  const history = useHistory()

  const ToLogin = () => {
    history.push('/')
  }
  return(
    <Container>
      <FiCheck  size = {70} />
      <h1>Cadastro realizado com sucesso</h1>
      <p>Agora é so fazer login</p>
      <button onClick = {ToLogin} >OK</button>
    </Container>
  )
}

export default ConfirmedRegistrtion