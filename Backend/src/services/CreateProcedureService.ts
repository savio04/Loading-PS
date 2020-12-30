import { getRepository } from 'typeorm'
import AppError from '../errors/AppError'
import Procedures from '../models/Procedures'

interface Request{
  name:string
  description:string
  avatar:string
}

class CreateProcedureService{
  public async  excute({name,description,avatar}:Request){
    const proceduresRepository = getRepository(Procedures)

    const FindProcedure = await proceduresRepository.findOne({
        where: {name,description}
    })

    if(FindProcedure){
        throw new AppError('Existing procedure',400)
    }

    const procedure = proceduresRepository.create({
        name,
        description,
        avatar
    })

    await proceduresRepository.save(procedure)
    
    return procedure
  }
}

export default CreateProcedureService