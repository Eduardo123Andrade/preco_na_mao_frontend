import { useNavigation } from '@react-navigation/native'
import { Button, InputText, Screen } from 'core/components'
import { Text } from 'core/components'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'


export const Login = () => {
  const [value, setValue] = useState<string>()
  const navigation = useNavigation()

  const onPressLogin = () => {
    navigation.navigate('HomeNavigator')
  }

  const onPressSignUp = () => {
    navigation.navigate("SingUp")
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
            mask='cpf'
            keyboardType='numeric'
            placeholder='CPF'
            value={value}
            onChangeText={setValue}
          />
        </View>
        <View style={styles.inputTextContainer}>
          <InputText
            placeholder='Senha'
            secureTextEntry
          />
        </View>


        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onPressSignUp}>
            <Text>
              Registrar
            </Text>
          </Button>

          <Button
            // isLoading
            style={styles.button} onPress={onPressLogin}>
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

