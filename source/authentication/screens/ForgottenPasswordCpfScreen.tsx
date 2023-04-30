import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useErrorModal } from 'core/hooks'
import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useForgottenPassword, useRequestAccessToken } from 'authentication/hooks'
import { StackNavigationOptions } from '@react-navigation/stack'
import { SimpleModal } from 'core/modals'
import { UserCpfForm } from 'core/interfaces'
import { useCpfValidationForm } from 'core/hooks/forms/useCpfValidationForm'


export const ForgottenPasswordCpfScreen = () => {
  const navigation = useNavigation()
  const [{ forgottenPassword }, { setForgottenPasswordData }] = useForgottenPassword()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  // const [{ isLoading }, { requestAccessToken }] = useRequestAccessToken({
  //   onSuccess: () => {
  //     navigation.navigate('ForgottenPasswordAccessTokenValidationScreen')
  //   },
  //   onError: ({ message }) => {
  //     startModalError(message)
  //   }
  // })

  const onSubmit = ({ cpf }: UserCpfForm) => {
    // setForgottenPasswordData({ cpf })
    // requestAccessToken(cpf)
    navigation.navigate('ForgottenPasswordAccessTokenValidationScreen')

  }

  const [{ fieldProps, isValid }, { handleSubmit }] = useCpfValidationForm({ onSubmit })
  const { onChangeText, ...restProps } = fieldProps

  useEffect(() => {
    console.log({ forgottenPassword })
    if (forgottenPassword?.cpf)
      onChangeText(forgottenPassword.cpf)

  }, [forgottenPassword])

  return (
    <AuthenticationScreen
      disabled={!isValid}
      onPress={handleSubmit}
    // isLoading={isLoading}
    >
      <View style={styles.inputTextContainer}>
        <InputText
          mask='cpf'
          keyboardType='numeric'
          placeholder='CPF'
          onChangeText={onChangeText}
          {...restProps}
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

ForgottenPasswordCpfScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  inputTextContainer: {
    paddingVertical: 10
  },
})
