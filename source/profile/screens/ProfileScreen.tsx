import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen } from 'core/components'
import { USER_KEY } from 'core/constants'
import { useErrorModal, useLocalStorage, useUser } from 'core/hooks'
import { useNameValidationForm } from 'core/hooks/forms/useNameValidationForm'
import { UserNameForm } from 'core/interfaces'
import { SimpleModal } from 'core/modals'
import { useUpdateUserRequest } from 'profile/hooks'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'


export const ProfileScreen = () => {
  const [{ user }, { setUserName }] = useUser()
  const [name, setName] = useState<string>(user.name)
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()
  const [, { storeData }] = useLocalStorage()
  const navigation = useNavigation()

  const { mutate, isLoading } = useUpdateUserRequest({
    onSuccess: ({ data }) => {
      const { name: remoteUserName } = data
      setUserName(remoteUserName)
      const userData = {
        ...data,
        token: user.token
      }
      storeData(USER_KEY, userData)
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })


  const onSubmit = ({ name }: UserNameForm) => {
    mutate({
      name,
      phoneNumber: user.phoneNumber
    })
  }

  const [{ fieldProps, isValid }, { handleSubmit }] = useNameValidationForm({ onSubmit })
  const { onChangeText } = fieldProps

  const _onChangeText = (text: string) => {
    onChangeText(text)
    setName(text)
  }

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
          value={user.phoneNumber}
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
        isLoading={isLoading}
        disabled={!isValid}
        onPress={onPress}>
        Avançar
      </Button>

      <SimpleModal
        visible={show}
        onRequestClose={resetState}
        message={message}
      />
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