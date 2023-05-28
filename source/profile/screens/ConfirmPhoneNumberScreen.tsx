import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, Screen, Text } from 'core/components'
import { USER_KEY } from 'core/constants'
import { useErrorModal, useLocalStorage, useUser } from 'core/hooks'
import { SimpleModal } from 'core/modals'
import { formatPhoneNumber } from 'core/utils/formatPhoneNumber'
import { useUpdatePhoneNumber, useUpdateUserRequest } from 'profile/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const ConfirmPhoneNumberScreen = () => {
  const [{ phoneNumber }] = useUpdatePhoneNumber()
  const [{ user }, { setPhoneNumber }] = useUser()
  const [, { storeData }] = useLocalStorage()

  const navigation = useNavigation()

  const { phoneNumber: phone } = user

  const formattedNumber = formatPhoneNumber(phoneNumber)
  const formattedOldNumber = formatPhoneNumber(phone)


  const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  const { mutate, isLoading } = useUpdateUserRequest({
    onSuccess: ({ data }) => {
      const { phoneNumber } = data
      const userData = {
        ...data,
        isLogged: true,
        token: user.token
      }

      setPhoneNumber(phoneNumber)
      storeData(USER_KEY, userData)

      navigation.navigate("ProfileScreen")
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const onPress = () => {
    mutate({
      phoneNumber,
      name: user.name,
    })
  }


  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.textContainer}>
        <Text>
          {`Ceteza que deseja alterar o numero: ${formattedOldNumber}`}
        </Text>
        <Text>
          {`Pelo numero: ${formattedNumber}`}
        </Text>
      </View>

      <Button
        isLoading={isLoading}
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
  title: 'Confirmar alteração'
}

ConfirmPhoneNumberScreen.NavigationOptions = navigationOptions



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  textContainer: {
    justifyContent: 'center'
  }
})