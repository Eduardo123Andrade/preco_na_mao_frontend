import { AuthenticationScreen } from 'authentication/components'
import { InputText, Text } from 'core/components'
import { usePhoneNumberForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { useSingUp } from 'authentication/hooks'
import { UserPhoneForm } from 'core/interfaces'


export const SingUpPhoneScreen = () => {
  const navigation = useNavigation()
  const [, { setRegisterUserData }] = useSingUp()


  const onSubmit = ({ phone }: UserPhoneForm) => {
    setRegisterUserData({ phone })
    navigation.navigate("SingUpPasswordScreen")
  }

  const [{ isValid, fieldProps }, { handleSubmit }] = usePhoneNumberForm({ onSubmit })

  const onPress = () => handleSubmit()

  return (
    <AuthenticationScreen
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
          mask='phone'
          keyboardType='numeric'
          placeholder='Celular'
          {...fieldProps}
        />
      </View>
    </AuthenticationScreen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerTransparent: true,
  title: ''
}

SingUpPhoneScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
