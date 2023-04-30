import { UserPasswordForm } from "core/interfaces"
import { useForm } from "../useForm"
import { PASSWORD_VALIDATION_SCHEMA } from 'core/validations/schemas'

const INITIAL_VALUES: UserPasswordForm = {
  password: '',
  confirmPassword: '',
}

interface UsePasswordValidationForm {
  onSubmit: (data: UserPasswordForm) => void
}

export const usePasswordValidationForm = ({ onSubmit }: UsePasswordValidationForm) => {
  const { handleSubmit, isValid, getFieldProps } = useForm<UserPasswordForm>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const fieldPropsPassword = getFieldProps('password')
  const fieldPropsConfirmPassword = getFieldProps("confirmPassword")

  return [{ fieldPropsPassword, fieldPropsConfirmPassword, isValid }, { handleSubmit }]
}