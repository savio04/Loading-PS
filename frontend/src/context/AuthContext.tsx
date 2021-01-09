import React,{ createContext, useCallback, useState} from 'react'
import Procedures from '../components/Procedure'
import api from '../service/api'

interface InputProps{
  email:string,
  password:string
}

interface localStorageProps{
  token:string
  user:object
}

interface procedureCart{
  id:string
  name:string
  avatar:string
  value: number
}

interface AuthContextProps{
  signInContext(inputProps: InputProps):Promise<void>
  LogOut():void
  Cart(Procedure:procedureCart): void
  ClearCart():void
  user:object
  isError: boolean
  Procedures: procedureCart []
  cont: number
}

export const AuthContext = createContext({} as AuthContextProps)


const AuthProvider: React.FC = ({children}) => {
  
  const [hasError,setHasError] = useState(false)
  const [proceduresCart,setProceduresCart] = useState<procedureCart []>([])
  const [cont,setCont] = useState(0)

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


      localStorage.setItem('@Plataform:user', JSON.stringify(user))
      localStorage.setItem('@Plataform:token', token)
      
      setData({
        user,
        token,
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


    setData({} as localStorageProps)
  },[])

  const Cart = useCallback((Procedure:procedureCart) => {

    const findIdProcedure = proceduresCart.filter(procedure => procedure.id === Procedure.id)

    if(findIdProcedure.length === 0){
      setProceduresCart([...proceduresCart,Procedure])
      setCont(cont + 1)
    }

  },[proceduresCart,cont])

  const ClearCart = useCallback(() => {
    setProceduresCart([])
    setCont(0)
  },[])

  return(
    <AuthContext.Provider value  ={{ClearCart,Cart,Procedures: proceduresCart, cont,LogOut,user: data.user , signInContext, isError: hasError}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

