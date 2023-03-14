import { Button, InputText, Screen } from 'core/components'
import { Text } from 'core/components/Text'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const HomeScreen = () => {

  const onPressLogin = () => {
    console.log('Login')
  }

  const onPressSignUp = () => {
    console.log('SignUp')
  }

  const onPressForgottenPassword = () => {
    console.log('ForgottenPassword')
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
            maxLength={11}
            keyboardType='numeric'
            placeholder='CPF'
          />
        </View>
        <View style={styles.inputTextContainer}>
          <InputText placeholder='Senha' />
        </View>


        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onPressLogin}>
            <Text>
              Registrar
            </Text>
          </Button>

          <Button style={styles.button} onPress={onPressSignUp}>
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

