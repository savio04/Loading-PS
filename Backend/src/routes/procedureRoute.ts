import { Router } from 'express';
import CreateProcedureService from '../services/CreateProcedureService'
import ensureAutheticate from '../middlewares/Authetication'
import IsAdmin from '../middlewares/VeirfyAdmin'
const procedureRoute = Router()

procedureRoute.use(ensureAutheticate)

procedureRoute.get('/', async (request,response) => {
    const procedureService = new CreateProcedureService

    const procedures = await procedureService.seeAll()

    return response.status(200).json(procedures)
})

procedureRoute.post('/',IsAdmin, async (request,response) => {
    const { name,description,avatar, value} = request.body
    const procedureService = new CreateProcedureService

    const procedure = await procedureService.excute({
        name,
        description,
        avatar,
        value
    })

    return response.status(201).json(procedure)
})

export default procedureRoute