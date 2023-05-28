import { USER_KEY } from './../../core/constants/localStorageKeys';
import { MOCKED_USER_DATA } from 'core/utils';
import { useState } from 'react';
import { useLocalStorage, useUser, usePostRequest } from "core/hooks"
import { User } from 'core/interfaces';
import { UsePostRequestStatus } from 'core/hooks/usePostRequest';


interface TError {
  message: string
}
interface LoginVariable {
  cpf: string,
  password: string
}

interface ResponseData extends User { }

interface UseLoginState {
  error: string
  isLoading: boolean
  status: UsePostRequestStatus
}

interface UseLoginActions {
  requestLogin: (cpf: string, password: string) => void
  requestLogout: () => void
}

type UseLoginData = [
  state: UseLoginState,
  actions: UseLoginActions
]


export const useLogin = (): UseLoginData => {
  const [, { setUser }] = useUser()
  const [error, setError] = useState<string>()
  const [, { storeData }] = useLocalStorage<User>()


  const { mutate, status, isLoading } = usePostRequest<ResponseData, LoginVariable, TError>('/auth/login', {
    onSuccess: ({ data }) => {
      const userData = { ...data, isLogged: true }
      storeData(USER_KEY, userData)
      setUser(userData)
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      setError(message)
    }
  })

  const requestLogin = (cpf: string, password: string) => {
    mutate({ cpf, password })
  }

  const requestLogout = () => {
    setUser(undefined)
    storeData(USER_KEY, null)
  }

  return [{ error, isLoading, status }, { requestLogin, requestLogout }]
}