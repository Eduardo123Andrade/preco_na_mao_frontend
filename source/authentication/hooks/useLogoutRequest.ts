import { RegisterUser } from 'authentication/interfaces';
import { usePostRequest } from 'core/hooks';
import { UsePostRequestOptionsType } from 'core/hooks/usePostRequest'
import { User } from 'core/interfaces';


interface TError {
  message: string
}

export const useLogoutRequest = (options: UsePostRequestOptionsType<any, TError, undefined>) => {

  const { mutate: request, ...rest } = usePostRequest('/auth/logout', options)

  const mutate = () => {
    request(undefined)
  }

  return { mutate, ...rest }
}