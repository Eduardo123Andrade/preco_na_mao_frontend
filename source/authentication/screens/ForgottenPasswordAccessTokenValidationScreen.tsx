import { AuthenticationScreen } from 'authentication/components'
import { InputText, Text } from 'core/components'
import { useErrorModal, useForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useForgottenPassword, useValidateAccessToken } from 'authentication/hooks'
import { REGEXP_ONLY_NUMBERS } from 'core/utils'
import { FieldValidation } from 'core/validations'
import { StackNavigationOptions } from '@react-navigation/stack'
import { SimpleModal } from 'core/modals'


const { string } = FieldValidation


interface AccessToken {
  accessToken: string
}

const ACCESS_TOKEN_VALIDATION_SCHEMA = FieldValidation.object({
  accessToken: string().length(6).label('codigo de accesso').required()
})

const INITIAL_VALUES = {
  accessToken: '',
}

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

  const onSubmit = ({ accessToken }: AccessToken) => {
    const { cpf } = forgottenPassword
    requestValidateAccessToken(cpf, accessToken)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<AccessToken>({
    onSubmit,
    validationSchema: ACCESS_TOKEN_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const { onChangeText: onChangeTextCpf, value: cpfFieldValue, ...restCpfFieldProps } = getFieldProps('accessToken')

  const _onChangeTextCpf = (text: string) => {
    const pureText = text.replace(REGEXP_ONLY_NUMBERS, "")
    onChangeTextCpf(pureText)
  }


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
          onChangeText={_onChangeTextCpf}
          value={cpfFieldValue}
          {...restCpfFieldProps}
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
