import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSingUp } from 'authentication/hooks'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { UserNameForm } from 'core/interfaces'
import { useNameValidationForm } from 'core/hooks/forms/useNameValidationForm'


export const SingUpNameScreen = () => {
  const navigation = useNavigation()
  const [, { setRegisterUserData }] = useSingUp()

  const onSubmit = ({ name }: UserNameForm) => {
    setRegisterUserData({ name })
    navigation.navigate('SingUpCpfScreen')
  }

  const [{ fieldProps, isValid }, { handleSubmit }] = useNameValidationForm({ onSubmit })

  const onPress = () => handleSubmit()

  return (
    <AuthenticationScreen
      disabled={!isValid}
      onPress={onPress}
    >
      <View style={styles.inputTextContainer}>
        <InputText
          autoCapitalize='words'
          placeholder='Nome'
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

SingUpNameScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  inputTextContainer: {
    paddingVertical: 10
  },
})
