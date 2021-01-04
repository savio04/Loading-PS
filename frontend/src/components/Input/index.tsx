import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  IconInput?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({IconInput, ...rest}) => {
  return(
    <Container>
      {IconInput && <IconInput size = {20} />}
      <input {...rest} />
    </Container>
  )
}

export default Input