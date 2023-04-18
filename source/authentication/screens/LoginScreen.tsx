import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { useLogin } from 'authentication/hooks'
import { loginValidationSchema } from 'authentication/utils'
import { Button, InputText, Logo, Screen } from 'core/components'
import { Text } from 'core/components'
import { useForm } from 'core/hooks'
import { SimpleModal } from 'core/modals'
import { REGEXP_ONLY_NUMBERS } from 'core/utils'
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'


const { width: WIDTH } = Dimensions.get('window')

interface Login {
  cpf: string
  password: string
}

const INITIAL_VALUES = {
  cpf: '',
  password: '',
}

export const LoginScreen = () => {
  const [value, setValue] = useState<string>()
  const navigation = useNavigation()
  const [{ isLoading, error, status }, { requestLogin }] = useLogin()
  const [showErrorModal, setShowErrorModal] = useState(false)

  useEffect(() => {
    setShowErrorModal(status === 'ERROR')
  }, [status])


  const onSubmit = ({ cpf, password }: Login) => {
    const cleanCpf = cpf.replace(REGEXP_ONLY_NUMBERS, '')
    requestLogin(cleanCpf, password)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<Login>({
    onSubmit,
    validationSchema: loginValidationSchema,
    initialValues: INITIAL_VALUES,
  })

  const { value: cpfFieldValue } = getFieldProps("cpf")


  const onPressLogin = () => {
    handleSubmit()
  }

  const onPressForgottenPassword = () => {
    const cpf = cpfFieldValue.replace(REGEXP_ONLY_NUMBERS, "")
    navigation.navigate("ForgottenPassword", {
      cpf: cpf
    })
  }

  const onRequestClose = () => {
    setShowErrorModal(false)
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.titleContainer}>
        <Logo />
      </View>

      <View>
        <View style={styles.inputTextContainer}>
          <InputText
            mask='cpf'
            keyboardType='numeric'
            placeholder='CPF'
            value={value}
            onChangeText={setValue}
            {...getFieldProps("cpf")}
          />
        </View>
        <View style={styles.inputTextContainer}>
          <InputText
            placeholder='Senha'
            secureTextEntry
            {...getFieldProps("password")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            disabled={!isValid}
            isLoading={isLoading}
            onPress={onPressLogin}
          >
            Login
          </Button>
        </View>

        <View style={styles.forgottenPasswordContainer}>
          <Text
            style={styles.textStyle}
            onPress={onPressForgottenPassword}
            color='#0000FF'
          >
            Esqueci minha senha
          </Text>
        </View>
      </View>
      <SimpleModal
        visible={showErrorModal}
        message='Login ou senha invalido'
        onRequestClose={onRequestClose}
      />
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

LoginScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 10,
  },
  inputTextContainer: {
    paddingVertical: 5
  },
  textStyle: {
    textDecorationLine: 'underline'
  },
  forgottenPasswordContainer: {
    alignItems: 'center',
    paddingTop: 24
  }
})