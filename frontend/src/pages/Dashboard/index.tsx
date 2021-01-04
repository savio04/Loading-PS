import React,{useState} from 'react'
import {Container, ButtonCart} from './styles'
import Procedures from '../../components/Procedure'
import Modal from '../../components/Modal'
import { FiShoppingCart } from 'react-icons/fi'

function Dashboard(){

  const [isVisible,setIsVlisible] = useState(false)
  const [contCart,setContCart] = useState(0)

  function closeModal(){
    setIsVlisible(false)
  }

  function openModal(){
    setIsVlisible(true);
  }

  function AddCart(){
    setContCart(contCart + 1)
  }


  return(
    <span>
      <Container>

      
        <h1>Procedimentos disponiveis</h1>
        
        <div>
          <Procedures onModal  = {openModal}/>
          <Procedures onModal  = {openModal}/>
          <Procedures onModal  = {openModal}/>
          <Procedures onModal  = {openModal}/>
          <Procedures onModal  = {openModal}/>
          <Procedures onModal  = {openModal}/>
          <Procedures onModal  = {openModal}/>
        </div>

        <ButtonCart> 
          <button >
            <FiShoppingCart size = {35} /> 
            <span> {contCart} </span>
          </button>
        </ButtonCart>

      </Container>
      {isVisible &&
          <Modal offModal ={closeModal}>
            <span>
              <img src="https://img.ibxk.com.br/2016/03/14/14143132361192.jpg?w=328" alt=""/>
              <h2>nome</h2>
            </span>

            <p>O procedimento que envolve inserção de um cateter agulhado pela membrana cricotireoidea em situações emergenciais, podendo ser mantido por até 30-45min.
            Cirurgia (do grego χειρουργική "cheirourgikē" e latim chirurgiae, trabalho manual), também chamada "procedimento cirúrgico" é qualquer tipo de procedimento no qual o cirurgião realiza uma intervenção manual ou instrumental.
            </p>

            <a onClick = {AddCart} >
              adiconar
            </a>
          </Modal>
      }
    </span>
  )
}

export default Dashboard