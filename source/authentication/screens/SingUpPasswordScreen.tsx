import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useErrorModal, useForm } from 'core/hooks'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation } from 'core/validations'
import { useRequestSingUp, useSingUp } from 'authentication/hooks'
import { StackNavigationOptions } from '@react-navigation/stack'
import { SimpleModal } from 'core/modals'


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

export const SingUpPasswordScreen = () => {
  const [{ user }] = useSingUp()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()


  const { mutate, isLoading } = useRequestSingUp({
    onSuccess: () => {

    },
    onError: ({ message }) => {
      startModalError(message)
    }
  })

  const onSubmit = ({ password, confirmPassword }: UserPassword) => {
    mutate({ ...user, password, confirmPassword })
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<UserPassword>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  return (
    <AuthenticationScreen
      disabled={!isValid}
      onPress={handleSubmit}
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
      <SimpleModal
        message={message}
        visible={show}
        onRequestClose={resetState}
      />
    </AuthenticationScreen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerTransparent: true,
  title: ''
}

SingUpPasswordScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
