import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Logo, Screen } from 'core/components'
import { usePhoneNumberForm } from 'core/hooks'
import { UserPhoneForm } from 'core/interfaces'
import { useUpdatePhoneNumber } from 'profile/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PhoneNumberScreen = () => {
  const navigation = useNavigation()
  const [, { setPhoneNumber }] = useUpdatePhoneNumber()

  const onSubmit = ({ phone }: UserPhoneForm) => {
    setPhoneNumber(phone)
    navigation.navigate('CodeValidationScreen')
  }

  const [{ isValid, fieldProps }, { handleSubmit }] = usePhoneNumberForm({ onSubmit })

  const onPress = () => handleSubmit()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <View style={styles.inputTextContainer}>
          <InputText
            mask='phone'
            keyboardType='numeric'
            placeholder='Celular'
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
  title: 'Novo telefone'
}

PhoneNumberScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  logoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})