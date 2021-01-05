import React from 'react'
import { Container } from './styles'
import { FiX } from 'react-icons/fi'

interface proceduresProps{
  name:string
  description:string
  avatar:string
  clickId: string
  id:string
}
interface ModalProps extends proceduresProps{
  offModal():void
  CartAdd():void
  isVisible:boolean
}


const Modal: React.FC<ModalProps> =  ({id,clickId,name,description,avatar, offModal,CartAdd,isVisible}) => {
  return (
    <>
      {isVisible && id === clickId ?
        <Container >
          <div>
            <button onClick = {offModal} > <FiX size = {30} /></button>
              <span>
                <img src={avatar} alt=""/>
                <h2> {name} </h2>
              </span>

              <p> {description} </p>

              <a onClick = {CartAdd}>
                adiconar
              </a>
          </div>
        </Container>
        :
        null
      }
    </>
  )
}

export default Modal