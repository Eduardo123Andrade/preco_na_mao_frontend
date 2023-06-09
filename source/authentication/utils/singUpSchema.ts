import { FieldValidation, validateCPF } from 'core/validations'
const { string, ref } = FieldValidation


export const singUpValidationSchema = FieldValidation.object({
  cpf: string().label('CPF').required().test('cpf', 'CPF inválido', validateCPF),
  phone: string().length(11).required(),
  password: string().min(6).required("É preciso atender a todos os requisitos").label('Senha'),
  confirmPassword: string()
    .oneOf(
      [ref('password')],
      'A nova senha deve ser igual a confirmação da senha.',
    )
    .required()
    .label('Confirmação de Senha'),
})