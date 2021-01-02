import {Router} from 'express'
import signupRoute from './userRoute'
import authRoute from './authRoute'
import procedureRoute from './procedureRoute'
import requestsRoute from './requestRoute'
const Routes = Router()

Routes.use('/signUp', signupRoute)
Routes.use('/signIn', authRoute)
Routes.use('/procedure', procedureRoute)
Routes.use('/requests', requestsRoute)


export default Routes