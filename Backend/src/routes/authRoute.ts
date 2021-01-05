import { Router } from 'express'
import CreateAuthService from '../services/CreteAuthService'
const authRoute = Router()

authRoute.post('/', async (request,response) => {
    const { email, password} = request.body
    const authService = new CreateAuthService

    const {user,token} = await authService.excute({
        email,
        password
    })

    delete user.password

    response.json({
        user,
        token
    })
})

export default authRoute