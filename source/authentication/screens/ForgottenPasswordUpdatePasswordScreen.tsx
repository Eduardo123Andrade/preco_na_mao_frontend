import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation } from 'core/validations'
import { useForgottenPassword, useRequestSingUp, useSingUp, useUpdatePassword } from 'authentication/hooks'
import { useNavigation } from '@react-navigation/native'


const { string, ref } = FieldValidation


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

export const ForgottenPasswordUpdatePasswordScreen = () => {
  const navigation = useNavigation()
  const [{ forgottenPassword }] = useForgottenPassword()
  const [{ isLoading }, { requestUpdatePassword }] = useUpdatePassword({
    onSuccess: () => {
      navigation.navigate("Home")
    }
  })

  const onSubmit = (props: UserPassword) => {
    const { cpf } = forgottenPassword
    requestUpdatePassword({ ...props, cpf })
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<UserPassword, string>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })


  const onPress = () => handleSubmit()

  return (
    <AuthenticationScreen
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
          {...getFieldProps('password')}
        />
      </View>

      <View style={styles.inputTextContainer}>
        <InputText
          placeholder='Confirmar senha'
          secureTextEntry
          {...getFieldProps('confirmPassword')}
        />
      </View>
    </AuthenticationScreen>
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