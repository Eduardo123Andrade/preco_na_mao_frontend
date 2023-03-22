import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet } from 'react-native'


export const ShoppingListHomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text>
        Aqui voce pode visualizar suas listas de compras
      </Text>
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

ShoppingListHomeScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})