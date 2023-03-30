import { MOCKED_USER_DATA } from 'core/utils';
import { useState } from 'react';
import { useUser } from "core/hooks"
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
  requestLogin: (cpf: string, password: string) => void
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


  // const { mutate, status, isLoading } = usePostRequest<ResponseData, LoginVariable, string>('/login', {
  //   onSuccess: ({ data }) => {
  //     setUser(data)
  //   },
  //   onError: ({ message }) => {
  //     setError(message)
  //   }
  // })

  const requestLogin = (cpf: string, password: string) => {
    // mutate({ cpf, password })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      console.log(cpf, password)
      if (cpf === '09907658499' && password === '123123') {
        setStatus('SUCCESS')
        return setUser(MOCKED_USER_DATA)
      }
      console.log('oi')
      setStatus('ERROR')
      setError('invalid credentials')
    }, 1500)
  }

  return [{ error, isLoading, status }, { requestLogin }]
}