import { usePutRequest } from 'core/hooks';
import { UsePostRequestOptionsType } from 'core/hooks/usePostRequest'
import { User } from 'core/interfaces';
import { UpdateUser } from 'profile/interfaces';


interface TError {
  message: string
}

export const useUpdateUserRequest = (options: UsePostRequestOptionsType<User, TError, UpdateUser>) => {

  const mutation = usePutRequest('/user/update', options)

  return mutation
}