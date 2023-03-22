import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet } from 'react-native'


export const ProfileScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text>
        Ola, aqui você podera editar seus dados
      </Text>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

ProfileScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})