import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useErrorModal, useForm, useUpdatePassword } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { useForgottenPassword } from 'authentication/hooks'
import { SimpleModal } from 'core/modals'
import { PASSWORD_VALIDATION_SCHEMA } from 'core/validations/schemas'
import { UserPasswordForm } from 'core/interfaces'



const INITIAL_VALUES: UserPasswordForm = {
  password: '',
  confirmPassword: '',
}

export const ForgottenPasswordUpdatePasswordScreen = () => {
  const navigation = useNavigation()
  const [{ forgottenPassword }] = useForgottenPassword()
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

  const { handleSubmit, isValid, getFieldProps } = useForm<UserPasswordForm>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

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

ForgottenPasswordUpdatePasswordScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  inputTextContainer: {
    paddingVertical: 10
  },
})
