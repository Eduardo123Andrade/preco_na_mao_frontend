import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, Screen, Text } from 'core/components'
import { useUser } from 'core/hooks'
import { formatPhoneNumber } from 'core/utils/formatPhoneNumber'
import { useUpdatePhoneNumber } from 'profile/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const ConfirmPhoneNumberScreen = () => {
  const [{ phoneNumber }] = useUpdatePhoneNumber()
  const [{ user: { phone } }] = useUser()
  const navigation = useNavigation()

  const formattedNumber = formatPhoneNumber(phoneNumber)
  const formattedOldNumber = formatPhoneNumber(phone)

  const onPress = () => {
    navigation.navigate("ProfileScreen")
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

      <Button onPress={onPress}>
        Avançar
      </Button>

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