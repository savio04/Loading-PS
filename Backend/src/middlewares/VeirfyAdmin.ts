import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import AppError from '../errors/AppError'
import User from '../models/Users'

async function  IsAdmin(request:Request, response: Response, next:NextFunction){
    const userId = request.user.id
    const userRepository = getRepository(User)

    const findUser = await userRepository.findOne({
        where:{id:userId}
    })

    if(!findUser.profile){
        throw new AppError('not is Admin', 400)
    }
    
    next()
}

export default IsAdmin