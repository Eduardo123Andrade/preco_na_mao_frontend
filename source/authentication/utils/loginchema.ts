import { FieldValidation, validateCPF } from 'core/validations'
const { string } = FieldValidation


export const loginValidationSchema = FieldValidation.object({
  cpf: string().label('CPF').required('CPF é obrigatorio').test('cpf', 'CPF inválido', validateCPF),
  password: string().min(6).required("É preciso atender a todos os requisitos").label('Senha'),
})
