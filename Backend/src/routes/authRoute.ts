import { Router } from 'express'
import CreateAuthService from '../services/CreteAuthService'
const authRoute = Router()

authRoute.post('/', async (request,response) => {
    const { email, password} = request.body
    const authService = new CreateAuthService

    const {FindUser,token} = await authService.excute({
        email,
        password
    })

    delete FindUser.password

    response.json({
        FindUser,
        token
    })
})

export default authRoute