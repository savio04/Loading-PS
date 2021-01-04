import React from 'react'
import { Div } from './styles'
import { FiPlusCircle } from 'react-icons/fi'

interface ProcedureProps{
  onModal():void
}

const Procedures: React.FC<ProcedureProps> = ({onModal}) => {
  return (
    <Div onClick = {onModal}>
      <img src="https://steamuserimages-a.akamaihd.net/ugc/1660105145368023702/9273ED97D9C5DC2AD93CAB1429221E2481740F43/" alt="perfil"/>
      <p>nome do procedimento</p>
    </Div>
  )
}

export default Procedures