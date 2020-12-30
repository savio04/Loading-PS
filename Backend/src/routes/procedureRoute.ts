import { response, Router } from 'express';
import CreateProcedureService from '../services/CreateProcedureService'
import ensureAutheticate from '../middlewares/Authetication'
const procedureRoute = Router()



procedureRoute.use(ensureAutheticate)

procedureRoute.post('/', async (request,response) => {
    const { name,description,avatar } = request.body
    const procedureService = new CreateProcedureService

    const procedure = await procedureService.excute({
        name,
        description,
        avatar
    })

    return response.status(201).json({
        procedure
    })
})

export default procedureRoute