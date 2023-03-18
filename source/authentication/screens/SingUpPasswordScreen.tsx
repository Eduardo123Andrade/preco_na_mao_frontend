import { SingUpScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation } from 'core/validations'
import { useRequestSingUp, useSingUp } from 'authentication/hooks'


const { string, ref } = FieldValidation

interface SingUpPasswordScreenProps { }

interface UserPassword {
  password: string
  confirmPassword: string
}


const PASSWORD_VALIDATION_SCHEMA = FieldValidation.object({
  password: string().min(6).required("É preciso atender a todos os requisitos").label('Senha'),
  confirmPassword: string()
    .oneOf(
      [ref('password')],
      'A nova senha deve ser igual a confirmação da senha.',
    )
    .required()
    .label('Confirmação de Senha'),

})

const INITIAL_VALUES = {
  password: '',
  confirmPassword: '',
}

export const SingUpPasswordScreen: React.FC<SingUpPasswordScreenProps> = () => {
  const [{ user }, { setRegisterUserData }] = useSingUp()
  const { mutate, isLoading } = useRequestSingUp()

  const onSubmit = ({ password, confirmPassword }: UserPassword) => {
    setRegisterUserData({
      password,
      confirmPassword,
    })
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<UserPassword, string>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })


  const { value: passwordFieldValue, ...restPasswordFieldProps } = getFieldProps('password')
  const { value: confirmPasswordFieldValue, ...restConfirmPasswordProps } = getFieldProps('confirmPassword')

  const onPress = () => handleSubmit()

  useEffect(() => {
    if (user)
      mutate(user)

  }, [user, mutate])

  return (
    <SingUpScreen
      disabled={!isValid}
      onPress={onPress}
      isLoading={isLoading}
    >
      <View style={styles.titleContainer}>
        <Text>
          Preço na Mão
        </Text>
      </View>

      <View style={styles.inputTextContainer}>
        <InputText
          placeholder='Senha'
          secureTextEntry
          {...restPasswordFieldProps}
        />
      </View>

      <View style={styles.inputTextContainer}>
        <InputText
          placeholder='Confirmar senha'
          secureTextEntry
          {...restConfirmPasswordProps}
        />
      </View>
    </SingUpScreen>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
