import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ValidatePasswordScreen = () => {
  return (
    <Screen contentContainerStyles={styles.container}>
      <Text>
        Olá mundo!
      </Text>
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  title: 'Validar senha'
}

ValidatePasswordScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})