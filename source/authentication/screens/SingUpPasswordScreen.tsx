import { SingUpScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation } from 'core/validations'
import { useSingUp } from 'authentication/hooks'


const { string, ref } = FieldValidation

type SingUpPasswordScreenProps = {

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

export const SingUpPasswordScreen: React.FC<SingUpPasswordScreenProps> = () => {
  const [{ user }, { setRegisterUserData }] = useSingUp()
  const onSubmit = () => { }

  const { isValid, getFieldProps } = useForm<string>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })


  const { value: passwordFieldValue, ...restPasswordFieldProps } = getFieldProps('password')
  const { value: confirmPasswordFieldValue, ...restConfirmPasswordProps } = getFieldProps('confirmPassword')

  const onPress = () => {
    setRegisterUserData({
      password: passwordFieldValue,
      confirmPassword: confirmPasswordFieldValue
    })
  }

  useEffect(() => {
    console.log({ user })
  }, [user])

  return (
    <SingUpScreen
      disabled={!isValid}
      onPress={onPress}
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
          {...restPasswordFieldProps}
        />
      </View>

      <View style={styles.inputTextContainer}>
        <InputText
          placeholder='Confirmar senha'
          secureTextEntry
          {...restConfirmPasswordProps}
        />
      </View>
    </SingUpScreen>
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
