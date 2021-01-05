import {Router} from 'express'
import signupRoute from './userRoute'
import authRoute from './authRoute'
import procedureRoute from './procedureRoute'
import requestsRoute from './requestRoute'
const Routes = Router()

Routes.use('/signup', signupRoute)
Routes.use('/signin', authRoute)
Routes.use('/procedure', procedureRoute)
Routes.use('/requests', requestsRoute)


export default Routes