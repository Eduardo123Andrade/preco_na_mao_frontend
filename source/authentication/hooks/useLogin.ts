import { useState } from 'react';
import { usePostRequest, useUser } from "core/hooks"
import { User } from "core/interfaces"
import { UsePostRequestStatus } from 'core/hooks/usePostRequest';


interface LoginVariable {
  cpf: string,
  password: string
}

interface ResponseData extends User { }

interface UseLoginState {
  error: string
  isLoading: boolean
  status: UsePostRequestStatus,
}

interface UseLoginActions {
  requestLogin: (cpf: string, password: string) => void
}

type UseLoginData = [
  state: UseLoginState,
  actions: UseLoginActions
]

export const useLogin = (): UseLoginData => {
  const [, { setUser }] = useUser()
  const [error, setError] = useState<string>()


  const { mutate, status, isLoading } = usePostRequest<ResponseData, LoginVariable, string>('/login', {
    onSuccess: ({ data }) => {
      setUser(data)
    },
    onError: ({ message }) => {
      setError(message)
    }
  })

  const requestLogin = (cpf: string, password: string) => {
    mutate({ cpf, password })
  }

  return [{ error, isLoading, status }, { requestLogin }]
}