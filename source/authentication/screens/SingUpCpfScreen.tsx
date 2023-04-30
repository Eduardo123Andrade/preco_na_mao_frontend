import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSingUp } from 'authentication/hooks'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { UserCpfForm } from 'core/interfaces'
import { useCpfValidationForm } from 'core/hooks/forms/useCpfValidationForm'


export const SingUpCpfScreen = () => {
  const navigation = useNavigation()
  const [, { setRegisterUserData }] = useSingUp()

  const onSubmit = ({ cpf }: UserCpfForm) => {
    setRegisterUserData({ cpf })
    navigation.navigate('SingUpPhoneScreen')
  }

  const [{ fieldProps, isValid }, { handleSubmit }] = useCpfValidationForm({ onSubmit })

  const onPress = () => handleSubmit()

  return (
    <AuthenticationScreen
      disabled={!isValid}
      onPress={onPress}
    >
      <View style={styles.inputTextContainer}>
        <InputText
          mask='cpf'
          keyboardType='numeric'
          placeholder='CPF'
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

SingUpCpfScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  inputTextContainer: {
    paddingVertical: 10
  },
})
