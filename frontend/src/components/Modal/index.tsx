import React from 'react'
import { Container } from './styles'
import { FiX } from 'react-icons/fi'

interface ModalProps{
  offModal():void
}

const Modal: React.FC<ModalProps> =  ({children, offModal}) => {
  return <Container>
    <div>
      <button onClick = {offModal} > <FiX size = {30} /></button>
      {children}
    </div>
  </Container>
}

export default Modal