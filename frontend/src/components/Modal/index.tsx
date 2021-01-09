import React, { useCallback, useContext, useState } from 'react'
import { Container, Card, ButtonHandle } from './styles'
import { FiX } from 'react-icons/fi'
import { AuthContext } from '../../context/AuthContext'
import api from '../../service/api'

interface ModalProps{
  offModal():void
  isVisible:boolean
}


const Modal: React.FC<ModalProps> =  ({offModal,isVisible}) => {
  const authContext = useContext(AuthContext)
  const { Procedures,ClearCart } = authContext
  const tokenLocal = localStorage.getItem('@Plataform:token')
  const token =`Bearer ${tokenLocal}`

  const handleRequest = useCallback(() => {
    Procedures.forEach(procedure => {
      api.post('/requests',
      {
        procedure_id: procedure.id,
      },
      {headers:{Authorization: token}})
      .then(response => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    })

   
    alert('Pedido enviado com sucesso')
    ClearCart()
    offModal()
  },[Procedures,token,ClearCart])

  return (
    <>
      {isVisible &&
        <Container >
          <div>
            <button onClick = {offModal} > <FiX size = {30} /></button>
            <header>
              <h2>Carrinho</h2>
            </header>
            {
              Procedures.map(procedure => 
              <Card key = {procedure.id}> 
                <header>
                  <img src={procedure.avatar} alt="avatar"/>
                  <h3> {procedure.name} </h3>
                </header>
          
                <span>
                  Valor:
                  <p> EU€ {procedure.value} </p>
                </span>
              </Card>)

            }
          
          <main>
            <ButtonHandle onClick = {ClearCart}>Limpar carrinho</ButtonHandle>
            <ButtonHandle  onClick = {handleRequest}>Enviar</ButtonHandle>
          </main>
          </div>
        </Container>
      }
    </>
  )
}

export default Modal