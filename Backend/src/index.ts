import 'reflect-metadata'
import 'express-async-errors'
import express, {Request, Response,NextFunction} from 'express'
import AppError from './errors/AppError'
import './database'
const app = express()
import Routes from './routes/index'

app.use(express.json())
app.use(Routes)

app.use((error:Error,request:Request,response:Response,next:NextFunction) => {
    if(error instanceof AppError){
      return response.status(error.statusCode).json({
        message: `${error.message}`
      })
    }
  
    console.log(error)
  
    return response.status(500).json({
      message: 'internal Error'
    })
  })

app.listen(2222, () => {
    console.log('Api iniciada...')
})