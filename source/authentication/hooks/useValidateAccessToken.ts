import { usePostRequest } from "core/hooks"
import { UsePostRequestOptionsType } from "core/hooks/usePostRequest"


interface RequestValidateAccessTokenVariable {
  cpf: string,
  accessToken: string
}

interface RequestValidateAccessTokenState {
  isLoading: boolean
}

interface RequestValidateAccessTokenActions {
  requestValidateAccessToken: (cpf: string, accessToken: string) => void
}

type RequestValidateAccessTokenData = [
  state: RequestValidateAccessTokenState,
  actions: RequestValidateAccessTokenActions
]


export const useValidateAccessToken = (options: UsePostRequestOptionsType<unknown, unknown, RequestValidateAccessTokenVariable>): RequestValidateAccessTokenData => {

  /**
   * router: auth/validate-code
   * body:
   *  cpf
   *  code
   * 
   * sucesso: 
   *  status: ok
   * 
   * error:
   *  status: _
   *    codigo invalido
   * 
   */

  const { mutate, isLoading } = usePostRequest('/validate-access-token', options)

  const requestValidateAccessToken = (cpf: string, accessToken: string) => {
    mutate({ cpf, accessToken })

  }

  return [{ isLoading }, { requestValidateAccessToken }]
}