import CreateUsersService from "./CreateUsersService";
import AppError from '../errors/AppError'
import Auth from '../config/Auth'

import { getRepository } from 'typeorm'
import User from '../models/Users'
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface Request{
    email:string
    password:string
}

class CreateAuthService{
    public async excute({email,password}:Request){
        const authRepository = getRepository(User)

        const FindUser = await authRepository.findOne({
            where: {email}
        })

        if(!FindUser){
           throw new AppError('Email ou senha incorretos', 401)
        }

        const passwordChecked = await compare(password, FindUser.password)

        if(!passwordChecked){
            throw new AppError('Email ou senha incorretos',401)
        }

        const token = sign({}, Auth.secret, {
            subject: FindUser.id,
            expiresIn: Auth.expiresIn
        })
      
        return {FindUser,token}
    }
}
export default CreateAuthService