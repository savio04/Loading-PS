import React from 'react'
import { Div } from './styles'
import { FiPlusCircle } from 'react-icons/fi'

interface ProcedureProps{
  name:string
  avatar:string
  description:string
}

const Procedures: React.FC<ProcedureProps> = ({avatar,name,description,...rest}) => {
  return (
    <Div {...rest} >
      <div>
        <img src={avatar} alt="avatar"/>
        <h2> {name} </h2>
      </div>
      <p> {description} </p>
      <button>
        Adicionar ao carrinho
      </button>
    </Div>
  )
}

export default Procedures