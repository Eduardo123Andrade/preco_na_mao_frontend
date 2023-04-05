import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen } from 'core/components'
import { useCodeValidationForm } from 'core/hooks'
import { CodeValidationForm } from 'core/interfaces'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



export const CodeValidationScreen = () => {
  const navigation = useNavigation()

  const onSubmit = ({ accessToken }: CodeValidationForm) => {
    navigation.navigate('ConfirmPhoneNumberScreen')
  }

  const [{ fieldProps, isValid }, { handleSubmit }] = useCodeValidationForm({ onSubmit })

  const onPress = () => handleSubmit()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View>

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
            {...fieldProps}
          />
        </View>
      </View>

      <Button
        onPress={onPress}
        disabled={!isValid}
      >
        Avançar
      </Button>

    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  title: 'Validar codigo'
}

CodeValidationScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})