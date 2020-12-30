import {Router} from 'express'
import signupRoute from './userRoute'
import authRoute from './authRoute'
import procedureRoute from './procedureRoute'
const Routes = Router()

Routes.use('/signUp', signupRoute)
Routes.use('/signIn', authRoute)
Routes.use('/procedure', procedureRoute)


export default Routes