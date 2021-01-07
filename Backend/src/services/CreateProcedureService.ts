import { getRepository } from 'typeorm'
import AppError from '../errors/AppError'
import Procedures from '../models/Procedures'

interface Request{
  name:string
  description:string
  avatar:string
  value:number
}

class CreateProcedureService{
  public async  excute({value,name,description,avatar}:Request){
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
        avatar,
        value
    })

    await proceduresRepository.save(procedure)
    
    return procedure
  }

  public async seeAll(){
    const proceduresRepository = getRepository(Procedures)

    const procedures = await proceduresRepository.find()

    return procedures
  }
}

export default CreateProcedureService