import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation, validateCPF } from 'core/validations'
import { REGEXP_ONLY_NUMBERS } from 'core/utils'
import { useNavigation } from '@react-navigation/native'
import { useForgottenPassword, useRequestAccessToken } from 'authentication/hooks'
const { string } = FieldValidation


interface SingUpCpfScreenProps { }

interface UserCpf {
  cpf: string
}

const CPF_VALIDATION_SCHEMA = FieldValidation.object({
  cpf: string().label('CPF').required().test('cpf', 'CPF invalido', validateCPF),
})


const INITIAL_VALUES = {
  cpf: '',
}

export const ForgottenPasswordCpfScreen: React.FC<SingUpCpfScreenProps> = () => {
  const navigation = useNavigation()
  const [{ forgottenPassword }, { setForgottenPasswordData }] = useForgottenPassword()
  const [{ isLoading }, { requestAccessToken }] = useRequestAccessToken({
    onSuccess: () => {
      navigation.navigate('ForgottenPasswordAccessTokenValidationScreen')
    }
  })

  const onSubmit = ({ cpf }: UserCpf) => {
    setForgottenPasswordData({ cpf })
    requestAccessToken(cpf)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<UserCpf, string>({
    onSubmit,
    validationSchema: CPF_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const { onChangeText: onChangeTextCpf, value: cpfFieldValue, ...restCpfFieldProps } = getFieldProps('cpf')

  const _onChangeTextCpf = (text: string) => {
    const pureText = text.replace(REGEXP_ONLY_NUMBERS, "")
    onChangeTextCpf(pureText)
  }


  useEffect(() => {
    if (forgottenPassword?.cpf)
      onChangeTextCpf(forgottenPassword.cpf)

  }, [forgottenPassword, onChangeTextCpf])


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
          mask='cpf'
          keyboardType='numeric'
          placeholder='CPF'
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
