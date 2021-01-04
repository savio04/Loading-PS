import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SingUp from '../pages/SignUp'
import SingIn from '../pages/SingIn'


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' component = {SingUp} exact/>
        <Route path = '/singIn' component = {SingIn} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes