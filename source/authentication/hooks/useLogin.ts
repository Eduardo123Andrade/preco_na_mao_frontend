import { USER_KEY } from './../../core/constants/localStorageKeys';
import { MOCKED_USER_DATA } from 'core/utils';
import { useState } from 'react';
import { useLocalStorage, useUser } from "core/hooks"
import { User } from 'core/interfaces';
// import { usePostRequest, useUser } from "core/hooks"
// import { User } from "core/interfaces"
// import { UsePostRequestStatus } from 'core/hooks/usePostRequest';

type Status = 'IDLE' | 'SUCCESS' | 'ERROR'

// interface LoginVariable {
//   cpf: string,
//   password: string
// }

// interface ResponseData extends User { }

interface UseLoginState {
  error: string
  isLoading: boolean
  status: Status
  // status: UsePostRequestStatus,
}

interface UseLoginActions {
  // requestLogin: (cpf: string, password: string) => void
  requestLogin: (cpf: string, password: string, user?: User) => void
  requestLogout: () => void
}

type UseLoginData = [
  state: UseLoginState,
  actions: UseLoginActions
]


export const useLogin = (): UseLoginData => {
  const [, { setUser }] = useUser()
  const [error, setError] = useState<string>()
  const [isLoading, setLoading] = useState(false)
  const [status, setStatus] = useState<Status>('IDLE')
  const [, { storeData }] = useLocalStorage<User>()



  /**
   * router: auth/login
   * body:
   *  cpf
   *  password
   * 
   * sucesso: 
   *  status: ok
   *    body:
   *      user
   *      token
   * 
   * error:
   *  status: 404
   *    usuario nao encontrado
   *          _
   *    login ou senha invalidos
   * 
   */


  // const { mutate, status, isLoading } = usePostRequest<ResponseData, LoginVariable, string>('/login', {
  //   onSuccess: ({ data }) => {
  // const userData = {...user, isLogged: true}
  // storeData(USER_KEY, userData)
  //     setUser(userData)
  //   },
  //   onError: ({ message }) => {
  //     setError(message)
  //   }
  // })

  const requestLogin = (cpf: string, password: string, user = MOCKED_USER_DATA) => {
    // mutate({ cpf, password })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (cpf === '09907658499' && password === '123123') {
        setStatus('SUCCESS')
        const userData = { ...user, isLogged: true }
        storeData(USER_KEY, userData)
        return setUser(userData)
      }
      setStatus('ERROR')
      setError('invalid credentials')
    }, 1500)
  }

  const requestLogout = () => {
    setUser({ ...MOCKED_USER_DATA, isLogged: false })
    storeData(USER_KEY, null)
  }

  return [{ error, isLoading, status }, { requestLogin, requestLogout }]
}