import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const ShoppingListHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Aqui voce pode visualizar suas listas de compras
      </Text>
    </View>
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