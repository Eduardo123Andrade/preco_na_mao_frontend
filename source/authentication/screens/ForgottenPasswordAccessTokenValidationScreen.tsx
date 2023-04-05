import { AuthenticationScreen } from 'authentication/components'
import { InputText, Text } from 'core/components'
import { useCodeValidationForm, useErrorModal } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useForgottenPassword, useValidateAccessToken } from 'authentication/hooks'
import { StackNavigationOptions } from '@react-navigation/stack'
import { SimpleModal } from 'core/modals'
import { CodeValidationForm } from 'core/interfaces'



export const ForgottenPasswordAccessTokenValidationScreen = () => {
  const navigation = useNavigation()
  const [{ forgottenPassword }] = useForgottenPassword()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  const [{ isLoading }, { requestValidateAccessToken }] = useValidateAccessToken({
    onSuccess: () => {

    },
    onError: ({ message }) => {
      startModalError(message)
    }
  })

  const onSubmit = ({ accessToken }: CodeValidationForm) => {
    const { cpf } = forgottenPassword
    requestValidateAccessToken(cpf, accessToken)
  }

  const [{ fieldProps, isValid }, { handleSubmit }] = useCodeValidationForm({ onSubmit })


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
          keyboardType='numeric'
          placeholder='Codigo'
          maxLength={6}
          {...fieldProps}
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

ForgottenPasswordAccessTokenValidationScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
