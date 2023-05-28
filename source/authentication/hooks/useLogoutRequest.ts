import { usePostRequest } from 'core/hooks';
import { UsePostRequestOptionsType } from 'core/hooks/usePostRequest'

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