import { FieldValidation } from "core/validations"
import { useForm } from "./useForm"
import { REGEXP_ONLY_NUMBERS } from "core/utils"
import { FieldProps, UserPhoneForm } from "core/interfaces"

const { string } = FieldValidation

const INITIAL_VALUES = {
  phone: '',
}

const PHONE_VALIDATION_SCHEMA = FieldValidation.object({
  phone: string().length(11).required(),
})

interface UsePhoneNumberState {
  fieldProps: FieldProps
  isValid: boolean
}

interface UsePhoneNumberActions {
  handleSubmit: () => void
}

type UsePhoneNumberFormData = [
  state: UsePhoneNumberState,
  actions: UsePhoneNumberActions
]

interface UsePhoneNumberFormProps {
  onSubmit: (data: UserPhoneForm) => void
}
export const usePhoneNumberForm = ({ onSubmit }: UsePhoneNumberFormProps): UsePhoneNumberFormData => {

  const { handleSubmit, isValid, getFieldProps } = useForm<UserPhoneForm>({
    onSubmit,
    initialValues: INITIAL_VALUES,
    validationSchema: PHONE_VALIDATION_SCHEMA,
  })

  const { onChangeText: _onChangeTextPhone, ...restFieldProps } = getFieldProps('phone')

  const onChangeText = (text: string) => {
    const pureText = text.replace(REGEXP_ONLY_NUMBERS, "")
    _onChangeTextPhone(pureText)
  }

  const fieldProps = { onChangeText, ...restFieldProps }

  return [{ fieldProps, isValid }, { handleSubmit }]
}