import { usePostRequest } from 'core/hooks';
import { UsePostRequestOptionsType, UsePostRequestStatus } from "core/hooks/usePostRequest"


interface RequestAccessTokenVariable {
  cpf: string
}

interface RequestAccessTokenState {
  isLoading: boolean
}

interface RequestAccessTokenActions {
  requestAccessToken: (cpf: string) => void
}

type RequestAccessTokenData = [
  state: RequestAccessTokenState,
  actions: RequestAccessTokenActions
]

export const useRequestAccessToken = (options: UsePostRequestOptionsType<unknown, unknown, RequestAccessTokenVariable>): RequestAccessTokenData => {

  /**
   * router: /access-token
   * body:
   *  cpf
   * 
   * sucesso: 
   *  status: ok
   * 
   * error:
   *  status: _
   *    token invalido
   * 
   */

  const { mutate, isLoading } = usePostRequest('/access-token', options)

  const requestAccessToken = (cpf: string) => {
    mutate({ cpf })
  }

  return [{ isLoading }, { requestAccessToken }]
}