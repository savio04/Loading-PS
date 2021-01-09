import React from 'react'
import { Container, Footer} from './styles'
import { FiPhoneCall } from 'react-icons/fi'



interface requestProps{
  nameUser:string;
  nameProcedure:string
  avatar:string
  cellphone:string
}


const Requests:React.FC <requestProps> = ({avatar,nameProcedure,nameUser,cellphone}) => {


  return (
    <Container>
         <span>
          <img src= {avatar} alt=""/>
          <h2> {nameProcedure} </h2>
        </span>
        <p>
          Pedido feito por
          <b> {nameUser} </b>
        </p>
        <Footer>
          <hr/>
          <a href= {`https://api.whatsapp.com/send?phone=+55${cellphone}`}>
            Entrar em contato
            <FiPhoneCall size = {20} />
          </a>
        </Footer>
    </Container>
  )
}

export default Requests