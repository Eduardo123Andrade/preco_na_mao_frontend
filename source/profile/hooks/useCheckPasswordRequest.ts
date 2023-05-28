import { UsePostRequestOptionsType, usePostRequest } from 'core/hooks/usePostRequest';
import { User } from 'core/interfaces';
import { CheckPassword } from 'profile/interfaces';


interface TError {
  message: string
}

export const useCheckPasswordRequest = (options: UsePostRequestOptionsType<User, TError, CheckPassword>) => {

  const mutation = usePostRequest('/user/password-validation', options)

  return mutation
}