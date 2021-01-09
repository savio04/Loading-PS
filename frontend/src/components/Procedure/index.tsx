import React, {useContext} from 'react'
import { Div, Footer } from './styles'
import { AuthContext } from '../../context/AuthContext'

interface ProcedureProps{
  id:string
  name:string
  avatar:string
  description:string
  value: number
}

const Procedures: React.FC<ProcedureProps> = ({id,value,avatar,name,description,...rest}) => {

  const authContext = useContext(AuthContext)
  const { Cart } = authContext

  return (
    <Div {...rest} >
      <div>
        <img src={avatar} alt="avatar"/>
        <h2> {name} </h2>
      </div>
      <p> {description} </p>
      
      <Footer>
        <span>
          Valor:
          <p> EU€ {value} </p>
        </span>
        <button onClick = {() => Cart({
          name,
          id,
          avatar,
          value,
        })} >
          Adicionar ao carrinho
        </button>
      </Footer>
    </Div>
  )
}

export default Procedures