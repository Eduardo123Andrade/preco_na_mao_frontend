import { SingUpScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation, validateCPF } from 'core/validations'
import { REGEX_ONLY_NUMBERS } from 'core/utils'
const { string } = FieldValidation

export const CPF_VALIDATION_SCHEMA = FieldValidation.object({
  cpf: string().label('CPF').required().test('cpf', 'CPF invalido', validateCPF),
})

type SingUpCpfScreenProps = {

}

const INITIAL_VALUES = {
  cpf: '',
}

export const SingUpCpfScreen: React.FC<SingUpCpfScreenProps> = (props) => {

  const onSubmit = () => { }

  const { isValid, getFieldProps } = useForm({
    onSubmit,
    validationSchema: CPF_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })


  const { onChangeText: onChangeTextCpf, value: cpfFieldValue, ...restCpfFieldProps } = getFieldProps('cpf')

  const _onChangeTextCpf = (text: string) => {
    const pureText = text.replace(REGEX_ONLY_NUMBERS, "")
    onChangeTextCpf(pureText)
  }

  const onPress = () => {
    console.log(isValid)
  }

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
          mask='cpf'
          keyboardType='numeric'
          placeholder='CPF'
          onChangeText={_onChangeTextCpf}
          value={cpfFieldValue}
          {...restCpfFieldProps}
        />
      </View>

    </SingUpScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
  },
  titleContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 0.45
  },
  inputTextContainer: {
    paddingVertical: 10
  },
  textStyle: {
    textDecorationLine: 'underline'
  },
  forgottenPasswordContainer: {
    alignItems: 'center',
    paddingTop: 24
  }
})
