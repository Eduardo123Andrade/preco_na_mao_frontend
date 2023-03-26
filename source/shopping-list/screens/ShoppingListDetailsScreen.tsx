import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ShoppingList } from 'shopping-list/interfaces'

interface ShoppingListDetailsScreenProps {
  shoppingList?: ShoppingList,
}

export const ShoppingListDetailsScreen = (props: ShoppingListDetailsScreenProps) => {
  return (
    <Screen style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerTransparent: true,
  title: ''
}

ShoppingListDetailsScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  container: {

  }
})