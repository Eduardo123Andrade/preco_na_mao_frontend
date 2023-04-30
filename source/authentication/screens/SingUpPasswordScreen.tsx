import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useErrorModal, useForm, usePasswordValidationForm } from 'core/hooks'
import React from 'react'
import { View, StyleSheet } from 'react-native'

import { useLogin, useRequestSingUp, useSingUp } from 'authentication/hooks'
import { StackNavigationOptions } from '@react-navigation/stack'
import { SimpleModal } from 'core/modals'
import { UserPasswordForm } from 'core/interfaces'



export const SingUpPasswordScreen = () => {
  const [{ user }] = useSingUp()
  const [, { requestLogin }] = useLogin()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  // const { mutate, isLoading } = useRequestSingUp({
  //   onSuccess: () => {

  //   },
  //   onError: ({ message }) => {
  //     startModalError(message)
  //   }
  // })

  const onSubmit = ({ password, confirmPassword }: UserPasswordForm) => {
    const userData: any = { ...user, isLogged: true }
    requestLogin(user.cpf, password, userData)
    // mutate({ ...user, password, confirmPassword })
  }

  const [{ handleSubmit, isValid, fieldPropsPassword, fieldPropsConfirmPassword }] = usePasswordValidationForm({ onSubmit })


  return (
    <AuthenticationScreen
      disabled={!isValid}
      onPress={handleSubmit}
    // isLoading={isLoading}
    >
      <View style={styles.inputTextContainer}>
        <InputText
          placeholder='Senha'
          secureTextEntry
          {...fieldPropsPassword}
        />
      </View>

      <View style={styles.inputTextContainer}>
        <InputText
          placeholder='Confirmar senha'
          secureTextEntry
          {...fieldPropsConfirmPassword}

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
  inputTextContainer: {
    paddingVertical: 10
  },
})
