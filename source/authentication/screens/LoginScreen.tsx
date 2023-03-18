import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { useLogin } from 'authentication/hooks'
import { loginValidationSchema } from 'authentication/utils'
import { Button, InputText, Screen } from 'core/components'
import { Text } from 'core/components'
import { useForm } from 'core/hooks'
import { REGEXP_ONLY_NUMBERS } from 'core/utils'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'


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
  const [{ isLoading }, { requestLogin }] = useLogin()
  // const navigation = useNavigation()

  const onSubmit = ({ cpf, password }: Login) => {
    requestLogin(cpf, password)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<Login, string>({
    onSubmit,
    validationSchema: loginValidationSchema,
    initialValues: INITIAL_VALUES,
  })

  const { value: cpfFieldValue } = getFieldProps("cpf")


  const onPressLogin = () => {
    // handleSubmit()
    navigation.navigate("Home")
  }

  const onPressSignUp = () => {
    navigation.navigate("SingUp")
  }

  const onPressForgottenPassword = () => {
    const cpf = cpfFieldValue.replace(REGEXP_ONLY_NUMBERS, "")
    navigation.navigate("ForgottenPassword", {
      cpf: cpf
    })
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
            style={styles.button} onPress={onPressSignUp}>
            <Text>
              Registrar
            </Text>
          </Button>

          <Button
            // disabled={!isValid}
            isLoading={isLoading}
            style={styles.button}
            onPress={onPressLogin}
          >
            <Text>
              Login
            </Text>
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

