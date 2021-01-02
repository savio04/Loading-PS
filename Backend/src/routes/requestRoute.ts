import { Router } from 'express'
import CreateRequestService from '../services/CreateRequestService'
import ensureAutheticate from '../middlewares/Authetication'
import IsAdmin from '../middlewares/VeirfyAdmin'
const requestsRoute = Router()

requestsRoute.use(ensureAutheticate)

requestsRoute.get('/',IsAdmin,async (request,response) => {
    const RequestService = new CreateRequestService

    const requestProcedures = await RequestService.seeAll()

    return response.json(requestProcedures)
})

requestsRoute.post('/', async (request,response) => {
    const {procedure_id} = request.body
    const RequestService = new CreateRequestService

    const requestUser = await RequestService.execute({
        user_id:request.user.id,
        procedure_id
    })

    return response.json(requestUser)

})




export default requestsRoute
