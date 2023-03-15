import { useNavigation } from '@react-navigation/native'
import { Button, InputText, Screen, Text } from 'core/components'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

type SingUpProps = {}

export const SingUp: React.FC<SingUpProps> = () => {
  const [value, setValue] = useState<string>()
  const navigation = useNavigation()

  const onPressSignUp = () => {
    navigation.navigate('HomeNavigator')
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
            mask='phone'
            keyboardType='numeric'
            placeholder='Celular'
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

        <View style={styles.inputTextContainer}>
          <InputText
            placeholder='Confirmar senha'
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onPressSignUp}>
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
