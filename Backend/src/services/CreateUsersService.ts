import { getRepository } from 'typeorm'
import User from '../models/Users'

import { hash } from 'bcryptjs'
import AppError from '../errors/AppError'

interface Request{
  name:string
  cellphone:string
  email:string
  password:string
  profile?:string
}

class CreateUsersService{
  public async  excute({name,cellphone,email,password,profile}:Request){
    const userRepository = getRepository(User)

    const findEmailExisting = await  userRepository.findOne({
      where: {email}
    })

    if(findEmailExisting){
      throw new AppError('Existing Email',400)
    }

    const passwordHash = await hash(password,10)

    const user =  userRepository.create({
      name,
      cellphone,
      email,
      password: passwordHash,
      profile
    })

    await userRepository.save(user)
    return user
  }
}

export default CreateUsersService