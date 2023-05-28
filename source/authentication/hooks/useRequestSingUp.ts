import { RegisterUser } from 'authentication/interfaces';
import { usePostRequest } from 'core/hooks';
import { UsePostRequestOptionsType } from 'core/hooks/usePostRequest'
import { User } from 'core/interfaces';


interface TError {
  message: string
}

export const useRequestSingUp = (options: UsePostRequestOptionsType<User, TError, RegisterUser>) => {

  const mutation = usePostRequest('/auth/sign-up', options)
  return mutation
}