import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import SingIn from '../pages/SignIn'
import SingUp from '../pages/SingUp'
import Dashboard from '../pages/Dashboard'
import {Router} from './Router'
import ConfirmedRegistrtion from '../pages/ConfirmedRegistration'
import AddProcedure from '../pages/AddProcedure'


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch >
        <Router path = '/' component = {SingIn} exact/>
        <Router path = '/signIn' component = {SingUp} exact/>
        <Router path = '/created' component = {ConfirmedRegistrtion} />
        <Router path = '/dashboard' component = {Dashboard} isProvider/>
        <Router path = '/addProcedures' component = {AddProcedure} isProvider/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes