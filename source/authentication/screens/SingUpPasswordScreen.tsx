import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useErrorModal, usePasswordValidationForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { useRequestSingUp, useSingUp } from 'authentication/hooks'
import { UserPasswordForm } from 'core/interfaces'
import { SimpleModal } from 'core/modals'



export const SingUpPasswordScreen = () => {
  const [{ user }] = useSingUp()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()
  const navigation = useNavigation()

  const { mutate, isLoading } = useRequestSingUp({
    onSuccess: () => {
      navigation.navigate("Login")
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const onSubmit = ({ password, confirmPassword }: UserPasswordForm) => {
    mutate({ ...user, password, confirmPassword })
  }

  const [{ isValid, fieldPropsPassword, fieldPropsConfirmPassword }, { handleSubmit }] = usePasswordValidationForm({ onSubmit })

  return (
    <AuthenticationScreen
      disabled={!isValid}
      onPress={handleSubmit}
      isLoading={isLoading}
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
