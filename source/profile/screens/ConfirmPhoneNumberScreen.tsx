import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, Screen, Text } from 'core/components'
import { formatPhoneNumber } from 'core/utils/formatPhoneNumber'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const ConfirmPhoneNumberScreen = () => {
  const navigation = useNavigation()

  const phoneNumber = '81998649300'
  const oldNumber = '00000000000'
  const formattedNumber = formatPhoneNumber(phoneNumber)
  const formattedOldNumber = formatPhoneNumber(oldNumber)


  const onPress = () => {
    navigation.navigate("Profile")
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