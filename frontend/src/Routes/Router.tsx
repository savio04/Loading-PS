import React, {useContext} from 'react'
import { RouteProps, Route as ReactRoute, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


interface ReactRouteProps extends RouteProps{
  isProvider?:boolean
  component: React.ComponentType
}

export const Router: React.FC<ReactRouteProps> = ({isProvider = false,component:Component, ...rest}) => {
  const Authcontext = useContext(AuthContext)
  const { user } = Authcontext
  return(
    <ReactRoute 
    {...rest}
    render = {() => {
      return isProvider === !!user ? 
      <Component /> : 
      <Redirect to = {{pathname: isProvider  ? '/' : '/dashboard'}} />
    }}
    />
  )
}