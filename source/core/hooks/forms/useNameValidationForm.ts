import { FieldProps, UserNameForm } from "core/interfaces"
import { FieldValidation, validateName } from 'core/validations'
import { useForm } from "../useForm"
const { string } = FieldValidation

const NAME_VALIDATION_SCHEMA = FieldValidation.object({
  name: string().label('name').required().test('name', 'Nome inválido', validateName),
})

const INITIAL_VALUES = {
  name: '',
}

interface UseNameValidationState {
  fieldProps: FieldProps
  isValid: boolean
}

interface UseNameValidationActions {
  handleSubmit: () => void
}

type UseNameValidationFormData = [
  state: UseNameValidationState,
  actions: UseNameValidationActions
]

interface UseNameValidationForm {
  onSubmit: (data: UserNameForm) => void
}

export const useNameValidationForm = ({ onSubmit }: UseNameValidationForm): UseNameValidationFormData => {
  const { handleSubmit, isValid, getFieldProps } = useForm<UserNameForm>({
    onSubmit,
    validationSchema: NAME_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const fieldProps = getFieldProps('name')

  return [{ fieldProps, isValid }, { handleSubmit }]
}