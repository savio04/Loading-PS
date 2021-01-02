import { Router } from 'express';
import CreateProcedureService from '../services/CreateProcedureService'
import ensureAutheticate from '../middlewares/Authetication'
import IsAdmin from '../middlewares/VeirfyAdmin'
const procedureRoute = Router()

procedureRoute.use(ensureAutheticate)

procedureRoute.get('/', async (request,response) => {
    const procedureService = new CreateProcedureService

    const procedures = await procedureService.seeAll()

    return response.json(procedures)
})

procedureRoute.post('/',IsAdmin, async (request,response) => {
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