import { stringify } from 'querystring'
import React,{ createContext, useCallback, useState} from 'react'
import api from '../service/api'

interface InputProps{
  email:string,
  password:string
}

interface localStorageProps{
  token:string
  user:object
}

interface AuthContextProps{
  signInContext(inputProps: InputProps):Promise<void>
  LogOut():void
  user:object
  isError: boolean
}

export const AuthContext = createContext({} as AuthContextProps)


const AuthProvider: React.FC = ({children}) => {
  
  const [hasError,setHasError] = useState(false)
  const [data,setData] = useState(() => {
    const user = localStorage.getItem('@Plataform:user')
    const token = localStorage.getItem('@Plataform:token')

    if(token && user){
      return { token , user: JSON.parse(user)}
    }

    return {} as localStorageProps
  })

  const signInContext = useCallback(async({email,password}) => {
    try{
      const response = await api.post('/signin', {
        email,
        password
      })

      const { user, token } = response.data

    const profile = !!user.profile

      localStorage.setItem('@Plataform:user', JSON.stringify(user))
      localStorage.setItem('@Plataform:token', token)
      localStorage.setItem('@Plataform:profile', String(profile))
      
      setData({
        user,
        token
      })

      setHasError(false)
    }catch(err){
      console.log(err)
      setHasError(true)
    }
  },[])

  const LogOut = useCallback(() => {
    localStorage.removeItem('@Plataform:user')
    localStorage.removeItem('@Plataform:token')
    localStorage.removeItem('@Plataform:profile')


    setData({} as localStorageProps)
  },[])

  return(
    <AuthContext.Provider value  ={{ LogOut,user: data.user , signInContext, isError: hasError}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

