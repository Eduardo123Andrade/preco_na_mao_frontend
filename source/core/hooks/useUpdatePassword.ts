import { UsePutRequestOptionsType } from "core/hooks/usePutRequest"
import { usePutRequest } from 'core/hooks'


interface UseUpdatePasswordVariables {
  oldPassword: string
  password: string
  confirmPassword: string
}


interface TError {
  message: string
}

export const useUpdatePassword = (options: UsePutRequestOptionsType<unknown, TError, UseUpdatePasswordVariables>) => {

  const mutation = usePutRequest('/user/update-password', options)


  return mutation
}