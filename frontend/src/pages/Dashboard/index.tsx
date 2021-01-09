import React,{useCallback, useContext, useEffect, useState} from 'react'
import {Container, ButtonCart, ButtonLogOut} from './styles'
import Procedures from '../../components/Procedure'
import { FiShoppingCart,FiLogOut } from 'react-icons/fi'
import api from '../../service/api'
import AdminDashboard from '../AdminDashboard'
import { AuthContext } from '../../context/AuthContext'
import Modal from '../../components/Modal'

interface proceduresProps{
  id:string
  name:string
  description:string
  avatar:string
  value:number
}

function Dashboard(){
  //Dados do modal
  const[isVisible,setIsvisible] = useState(false)
  //Get token authetication
  const tokenLocal = localStorage.getItem('@Plataform:token')
  const token =`Bearer ${tokenLocal}`
  
  let profile
  const userLocal = localStorage.getItem('@Plataform:user')

  if(userLocal){
    const user = JSON.parse(userLocal)
    profile = user.profile
  }
  const Authcontext = useContext(AuthContext)
  const { LogOut,cont } = Authcontext
  const [procedures,setProcedures] = useState<proceduresProps[]>([])


  const OpenModal = () => {
    setIsvisible(true)
  }

  const CloseModal = useCallback(() => {
    setIsvisible(false)
  },[])


  useEffect(() => {
    api.get('/procedure',{headers:{Authorization: token}}).then(response => {
      if(response.data){
        setProcedures(response.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  },[token])


  return(
    <>
      {profile ? 
        <AdminDashboard />
        :
        <>
        <Container>
          <header>
            <h1>Procedimentos disponiveis</h1>
            <ButtonLogOut onClick = {LogOut}>
                Sair
                <FiLogOut size = {20} />
            </ButtonLogOut>
          </header>
          
          <div>
            {procedures.map(procedure => 
                <Procedures
                  key = {procedure.id}
                  id = {procedure.id}
                  name = {procedure.name}
                  avatar = {procedure.avatar}
                  value = {procedure.value}
                  description = {procedure.description}
                />
            )}
          </div> 

          <ButtonCart> 
            <button onClick = {OpenModal} >
              <FiShoppingCart size = {35} /> 
              <span> {cont} </span>
            </button>
          </ButtonCart>
        </Container>

        <Modal offModal = {CloseModal} isVisible ={isVisible} />
        </>
        
      }
    </>
  )
}

export default Dashboard