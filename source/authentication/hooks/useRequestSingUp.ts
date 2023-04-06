import { RegisterUser } from 'authentication/interfaces';
import { usePostRequest } from 'core/hooks';
import { UsePostRequestOptionsType } from 'core/hooks/usePostRequest'
import { User } from 'core/interfaces';


interface TError { }

export const useRequestSingUp = (options: UsePostRequestOptionsType<User, TError, RegisterUser>) => {

  /**
   * router: user/sing-up
   * body
   *  name
   *  cpf
   *  phoneNumber
   *  password
   *  confirmPassword
   * 
   * 
   * sucesso: 
   *  status: ok
   * 
   * error:
   *  status: _
   *    usuario ja cadastrado
   * 
   */


  const mutation = usePostRequest('/sing-up', options)
  return mutation
}