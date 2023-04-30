import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen } from 'core/components'
import { useUser } from 'core/hooks'
import { useNameValidationForm } from 'core/hooks/forms/useNameValidationForm'
import { UserNameForm } from 'core/interfaces'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'


export const ProfileScreen = () => {
  const [{ user }, { setUserName }] = useUser()
  const [name, setName] = useState<string>(user.name)

  const navigation = useNavigation()

  const onSubmit = ({ name }: UserNameForm) => {
    setUserName(name)
  }

  const [{ fieldProps, isValid }, { handleSubmit }] = useNameValidationForm({ onSubmit })
  const { onChangeText } = fieldProps

  const _onChangeText = (text: string) => {
    onChangeText(text)
    setName(text)
  }

  /**
   * router: user/update-name
   * 
   * body: 
   *  cpf,
   *  name
   * 
   * success:
   *  status: ok
   * 
   * error:
   *  status: _
   * 
   */

  const onPress = () => handleSubmit()

  const goToUpdatePasswordScreen = () => {
    navigation.navigate('UpdatePassword', {
      screen: 'ValidatePasswordScreen',
      params: {
        nextRouterName: 'UpdatePasswordScreen',
      }
    })
  }

  const goToUpdatePhoneNumberScreen = () => {
    navigation.navigate('UpdatePhoneNumber', {
      screen: 'ValidatePasswordScreen',
      params: {
        nextRouterName: 'PhoneNumberScreen',
      }
    })
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.inputContainer}>
        <InputText
          {...fieldProps}
          value={name}
          onChangeText={_onChangeText}
        />

        <InputText
          disabled
          value={user.phone}
          onPressOnDisabled={goToUpdatePhoneNumberScreen}
        />

        <InputText
          disabled
          value="123123123123"
          secureTextEntry
          onPressOnDisabled={goToUpdatePasswordScreen}
        />
      </View>

      <Button
        disabled={!isValid}
        onPress={onPress}>
        Avançar
      </Button>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  title: 'Atualizar dados'
}

ProfileScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  inputContainer: {
    flex: 0.6,
    justifyContent: 'space-around'
  }
})