import { StackNavigationOptions } from '@react-navigation/stack'
import { Icon, Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Product } from 'shopping-list/components'
import { ShoppingList } from 'shopping-list/interfaces'
import { MOCKED_SHOPPING_LIST } from 'shopping-list/utils'

interface ShoppingListDetailsScreenProps {
  shoppingList?: ShoppingList,
}


const [currentShoppingList] = MOCKED_SHOPPING_LIST

export const ShoppingListDetailsScreen = (props: ShoppingListDetailsScreenProps) => {
  return (
    <Screen style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>
          {currentShoppingList.name}
        </Text>
        <Icon
          name='play-arrow'
          size={20}
          color='#AAA'
        />
      </View>
      <Product />
      <View>

      </View>
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
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#F11',
    paddingVertical: 20,
  }
})