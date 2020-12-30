import { Request,Response,NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import Auth from '../config/Auth'
import AppError from '../errors/AppError'

interface Payload{
  iat:number
  exp:number
  sub:string
}

export default function ensureAutheticate(
  request:Request,
  response:Response,
  next:NextFunction)
  {
  const tokenRequest = request.headers.authorization
  if(!tokenRequest){
    throw new AppError('token not existing', 400)
  }

  const [,token] = tokenRequest.split(' ')

  try{
    const verifyToken = verify(token,Auth.secret)

    const { sub } = verifyToken as Payload

    request.user = {
      id: sub
    }
    next()
  }catch{
    throw new AppError('Token invalid',400)
  }
}