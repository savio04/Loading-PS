import { getRepository } from 'typeorm'
import Requests from '../models/Requests'



interface Request{
    user_id:string
    procedure_id:string
}

class CreateRequestService{
    public async execute({user_id,procedure_id}:Request){
        const requestRepository = getRepository(Requests)
        const request = requestRepository.create({
            user_id,
            procedure_id
        })

        await requestRepository.save(request)

        return request
    }
    public async seeAll(){
        const requestRepository = getRepository(Requests)

        const requestsProcedures = await requestRepository.find()


        return requestsProcedures
    }
}

export default CreateRequestService