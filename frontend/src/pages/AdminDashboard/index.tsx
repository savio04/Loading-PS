import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Container, Span} from './styles'
import Requests from '../../components/Requests'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import api from '../../service/api'

interface requestsProps{
  id:string
  procedure_id:string
  nameUser:string
  cellphone:string
  nameProcedure:string;
  avatar: string
}

const AdminDashboard: React.FC = () => {
  const tokenLocal = localStorage.getItem('@Plataform:token')
  const token =`Bearer ${tokenLocal}`
  const [requests,setRequests] = useState<requestsProps []>([])
  const Authcontext = useContext(AuthContext)
  const { LogOut}  = Authcontext

  useEffect(() => {
    api.get('/requests',{headers:{Authorization: token}})
    .then(response => {
        setRequests(response.data)
    })
  },[token])
  return (
    <Container>
      <header>
        <div>
          <h1>Pedidos Pendentes</h1>
          <Span>
          <Link to = "/addProcedures">Adicionar serviço</Link>
            <button onClick ={LogOut}>
              sair
              <FiLogOut size = {20} />
            </button>
          </Span>
        </div>
      </header>

      <main>
        <div>
          {requests.map(request =>{

            return <Requests 
            key = {request.id}
            nameUser = {request.nameUser}
            cellphone = {request.cellphone}
            nameProcedure = {request.nameProcedure}
            avatar = {request.avatar}
          />
          })}
        </div> 
      </main>
    </Container>
  )
}

export default AdminDashboard