import { UsePutRequestOptionsType } from "core/hooks/usePutRequest"
import { usePutRequest } from 'core/hooks'



interface UseUpdatePasswordVariables {
  cpf: string
  password: string
  confirmPassword: string
}

interface UseUpdatePasswordState {
  isLoading: boolean
}

interface UseUpdatePasswordActions {
  requestUpdatePassword: (props: UseUpdatePasswordVariables) => void
}

type UseUpdatePasswordData = [
  state: UseUpdatePasswordState,
  actions: UseUpdatePasswordActions
]

export const useUpdatePassword = (options: UsePutRequestOptionsType<unknown, unknown, UseUpdatePasswordVariables>): UseUpdatePasswordData => {

  const { mutate, isLoading } = usePutRequest('/update-password', options)

  const requestUpdatePassword = (props: UseUpdatePasswordVariables) => {
    mutate(props)
  }

  return [{ isLoading }, { requestUpdatePassword }]
}