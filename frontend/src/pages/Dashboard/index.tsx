import React,{useContext, useEffect, useState} from 'react'
import {Container, ButtonCart} from './styles'
import Procedures from '../../components/Procedure'
import { FiShoppingCart } from 'react-icons/fi'
import api from '../../service/api'
import AdminDashboard from '../AdminDashboard'
import { AuthContext } from '../../context/AuthContext'

interface proceduresProps{
  id:string
  name:string
  description:string
  avatar:string
}

function Dashboard(){
  const tokenLocal = localStorage.getItem('@Plataform:token')
  const token =`Bearer ${tokenLocal}`
  const Authcontext = useContext(AuthContext)
  const { LogOut } = Authcontext
  const profile = false;

  console.log(profile)


  const [procedures,setProcedures] = useState<proceduresProps[]>([])




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
        <Container>
          <h1>Procedimentos disponiveis</h1>
          
          <div>
            {procedures.map(procedure => 
                <Procedures
                  key = {procedure.id}
                  name = {procedure.name}
                  avatar = {procedure.avatar}
                  description = {procedure.description}
                />
            )}
          </div> 

          <ButtonCart> 
            <button >
              <FiShoppingCart size = {35} /> 
              <span> 0 </span>
            </button>

            <button onClick = {LogOut}>Sair</button>
          </ButtonCart>
        </Container>
        
      }
    </>
  )
}

export default Dashboard