import { useNavigation } from '@react-navigation/native'
import { singUpValidationSchema } from 'authentication/utils'
import { Button, InputText, Screen, Text } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type SingUpProps = {}

const REGEX_ONLY_NUMBERS = /[^0-9]/g

const INITIAL_VALUES = {
  cpf: '',
  phone: '',
  password: '',
  confirmPassword: ''
}

export const SingUp: React.FC<SingUpProps> = () => {
  const navigation = useNavigation()

  const onSubmit = (props: any, _helper: any) => {
    console.log(props)
  }

  const { isValid, getFieldProps } = useForm({
    onSubmit,
    validationSchema: singUpValidationSchema,
    initialValues: INITIAL_VALUES,
  })

  const { onChangeText: onChangeTextCpf, value: cpfFieldValue, ...restCpfFieldProps } = getFieldProps('cpf')
  const { onChangeText: onChangeTextPhone, value: phoneFieldValue, ...restPhoneFieldProps } = getFieldProps('phone')

  const _onChangeTextCpf = (text: string) => {
    const pureText = text.replace(REGEX_ONLY_NUMBERS, "")
    onChangeTextCpf(pureText)
  }

  const _onChangeTextPhone = (text: string) => {
    const pureText = text.replace(REGEX_ONLY_NUMBERS, "")
    onChangeTextPhone(pureText)
  }

  const onPressSignUp = () => {
    console.log({ isValid })
  }


  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.titleContainer}>
        <Text>
          Preço na Mão
        </Text>
      </View>

      <View>
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

        <View style={styles.inputTextContainer}>
          <InputText
            mask='phone'
            keyboardType='numeric'
            placeholder='Celular'
            value={phoneFieldValue}
            onChangeText={_onChangeTextPhone}
            {...restPhoneFieldProps}
          />
        </View>


        <View style={styles.inputTextContainer}>
          <InputText
            placeholder='Senha'
            secureTextEntry
            {...getFieldProps("password")}
          />
        </View>

        <View style={styles.inputTextContainer}>
          <InputText
            placeholder='Confirmar senha'
            secureTextEntry
            {...getFieldProps("confirmPassword")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button} onPress={onPressSignUp}>
            <Text>
              Registrar
            </Text>
          </Button>
        </View>

      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
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
