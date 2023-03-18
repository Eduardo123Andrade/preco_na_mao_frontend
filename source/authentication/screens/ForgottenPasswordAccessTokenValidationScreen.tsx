import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useForgottenPassword, useValidateAccessToken } from 'authentication/hooks'
import { REGEXP_ONLY_NUMBERS } from 'core/utils'
import { FieldValidation } from 'core/validations'
const { string } = FieldValidation


interface SingUpCpfScreenProps { }

interface AccessToken {
  accessToken: string
}

const ACCESS_TOKEN_VALIDATION_SCHEMA = FieldValidation.object({
  accessToken: string().length(6).label('codigo de accesso').required()
})


const INITIAL_VALUES = {
  accessToken: '',
}

export const ForgottenPasswordAccessTokenValidationScreen: React.FC<SingUpCpfScreenProps> = () => {
  const navigation = useNavigation()
  const [{ forgottenPassword }] = useForgottenPassword()
  const [{ isLoading }, { requestValidateAccessToken }] = useValidateAccessToken({
    onSuccess: () => {
      // navigation.navigate('ForgottenPasswordAccessTokenValidationScreen')
    }
  })

  const onSubmit = ({ accessToken }: AccessToken) => {
    const { cpf } = forgottenPassword
    requestValidateAccessToken(cpf, accessToken)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<AccessToken, string>({
    onSubmit,
    validationSchema: ACCESS_TOKEN_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const { onChangeText: onChangeTextCpf, value: cpfFieldValue, ...restCpfFieldProps } = getFieldProps('accessToken')

  const _onChangeTextCpf = (text: string) => {
    const pureText = text.replace(REGEXP_ONLY_NUMBERS, "")
    onChangeTextCpf(pureText)
  }


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
          keyboardType='numeric'
          placeholder='Codigo'
          maxLength={6}
          onChangeText={_onChangeTextCpf}
          value={cpfFieldValue}
          {...restCpfFieldProps}
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
