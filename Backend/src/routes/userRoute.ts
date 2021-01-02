import { Router } from 'express'
import CreateUsersService from '../services/CreateUsersService'
const signupRoute = Router()

signupRoute.post('/', async (request,response) => {
    const { name, email,cellphone, password, profile } = request.body
    const createUsersService = new CreateUsersService

    const user = await createUsersService.excute({
        name,
        email,
        cellphone,
        password,
        profile
    })

    delete user.password

    return response.status(200).json(user)

})

export default signupRoute