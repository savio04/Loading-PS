import { request } from 'express';
import { getRepository } from 'typeorm'
import Requests from '../models/Requests'
import Procedure from '../models/Procedures'
import User from '../models/Users'
import AppError from '../errors/AppError'



interface Request{
    user_id:string
    procedure_id:string
}

class CreateRequestService{
    public async execute({user_id,procedure_id}:Request){
        const requestRepository = getRepository(Requests)
        const userRepository = getRepository(User)
        const procedureRepository = getRepository(Procedure)

        const findUser = await userRepository.findOne({
            where:{id: user_id}
        })

        const findProcedure = await procedureRepository.findOne({
            where: {id: procedure_id}
        })

        const requestData = requestRepository.create({
            procedure_id,
            user_id,
            procedure: findProcedure,
            user: findUser
        })

        await requestRepository.save(requestData)

        return requestData
    }
    public async seeAll(){
        const requestRepository = getRepository(Requests)


        const requestsProcedures = await requestRepository.find()

        const Data = requestsProcedures.map(requests => ({
            id: requests.id,
            nameUser: requests.user.name,
            cellphone: requests.user.cellphone,
            avatar: requests.procedure.avatar,
            nameProcedure: requests.procedure.name
        }))

        return Data
    }
}

export default CreateRequestService