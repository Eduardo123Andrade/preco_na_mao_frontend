import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, Screen, Text } from 'core/components'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from 'shopping-list/components'
import { ShoppingList } from 'shopping-list/interfaces'



const renderItem = (item: ShoppingList) => {
  return <></>
}



export const ShoppingListHomeScreen = () => {

  return (
    <Screen style={styles.container}>
      <View style={styles.cardContainer}>
        <Card />
      </View>

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
  },
  cardContainer: {

  }
})