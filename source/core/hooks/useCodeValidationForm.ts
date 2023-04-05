import { CodeValidationForm } from "core/interfaces"
import { FieldValidation } from "core/validations"
import { useForm } from "./useForm"
import { REGEXP_ONLY_NUMBERS } from "core/utils"

const { string } = FieldValidation

const ACCESS_TOKEN_VALIDATION_SCHEMA = FieldValidation.object({
  accessToken: string().length(6).label('codigo de accesso').required()
})

const INITIAL_VALUES = {
  accessToken: '',
}

interface UseCodeValidationFormProps {
  onSubmit: (data: CodeValidationForm) => void
}


export const useCodeValidationForm = ({ onSubmit }: UseCodeValidationFormProps) => {

  const { handleSubmit, isValid, getFieldProps } = useForm<CodeValidationForm>({
    onSubmit,
    initialValues: INITIAL_VALUES,
    validationSchema: ACCESS_TOKEN_VALIDATION_SCHEMA,
  })

  const { onChangeText: _onChangeTextPhone, ...restFieldProps } = getFieldProps('accessToken')

  const onChangeText = (text: string) => {
    const pureText = text.replace(REGEXP_ONLY_NUMBERS, "")
    _onChangeTextPhone(pureText)
  }

  const fieldProps = { onChangeText, ...restFieldProps }

  return [{ fieldProps, isValid }, { handleSubmit }]
}