import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useErrorModal, usePasswordValidationForm, useUpdatePassword } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
// import { useForgottenPassword } from 'authentication/hooks'
import { SimpleModal } from 'core/modals'
import { UserPasswordForm } from 'core/interfaces'

export const ForgottenPasswordUpdatePasswordScreen = () => {
  const navigation = useNavigation()
  // const [{ forgottenPassword }] = useForgottenPassword()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  // const [{ isLoading }, { requestUpdatePassword }] = useUpdatePassword({
  //   onSuccess: () => {
  //     navigation.navigate("Home")
  //   },
  //   onError: ({ message }) => {
  //     startModalError(message)
  //   }
  // })

  const onSubmit = (props: UserPasswordForm) => {
    navigation.navigate("Home")
    // const { cpf } = forgottenPassword
    // requestUpdatePassword({ ...props, cpf })
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

ForgottenPasswordUpdatePasswordScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  inputTextContainer: {
    paddingVertical: 10
  },
})
