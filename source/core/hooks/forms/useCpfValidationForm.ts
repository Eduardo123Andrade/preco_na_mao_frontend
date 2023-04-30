import { FieldProps, UserCpfForm } from 'core/interfaces'
import { FieldValidation, validateCPF } from 'core/validations'
import { useForm } from '../useForm'
import { REGEXP_ONLY_NUMBERS } from 'core/utils'
const { string } = FieldValidation


interface UseCpfValidationFormProps {
  onSubmit: (data: UserCpfForm) => void
}

const CPF_VALIDATION_SCHEMA = FieldValidation.object({
  cpf: string().label('CPF').required().test('cpf', 'CPF inválido', validateCPF),
})

const INITIAL_VALUES = {
  cpf: '',
}

interface UseCpfValidationState {
  fieldProps: FieldProps
  isValid: boolean
}

interface UseCpfValidationActions {
  handleSubmit: () => void
}

type UseCpfValidationFormData = [
  state: UseCpfValidationState,
  actions: UseCpfValidationActions
]


export const useCpfValidationForm = ({ onSubmit }: UseCpfValidationFormProps): UseCpfValidationFormData => {
  const { handleSubmit, isValid, getFieldProps } = useForm<UserCpfForm>({
    onSubmit,
    validationSchema: CPF_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const { onChangeText: _onChangeTextPhone, ...restFieldProps } = getFieldProps('cpf')

  const onChangeText = (text: string) => {
    const pureText = text.replace(REGEXP_ONLY_NUMBERS, "")
    _onChangeTextPhone(pureText)
  }

  const fieldProps = { onChangeText, ...restFieldProps }

  return [{ fieldProps, isValid, ...restFieldProps }, { handleSubmit }]
}