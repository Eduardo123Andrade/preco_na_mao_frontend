import { FieldValidation, validateCPF } from 'core/validations'
const { string } = FieldValidation


export const loginValidationSchema = FieldValidation.object({
  cpf: string().label('CPF').required().test('cpf', 'CPF invalido', validateCPF),
  password: string().min(6).required("É preciso atender a todos os requisitos").label('Senha'),
})
