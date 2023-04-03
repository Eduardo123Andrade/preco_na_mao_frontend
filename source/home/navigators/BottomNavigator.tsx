import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { ShoppingListNavigator } from 'shopping-list'
import { HomeNavigatorNavigator } from './StackNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

export const HomeBottomNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={HomeNavigatorNavigator}
        options={HomeNavigatorNavigator.NavigationOptions}
      />

      <Screen
        name='ShoppingList'
        component={ShoppingListNavigator}
        options={ShoppingListNavigator.NavigationOptions}
      />
    </Navigator>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

HomeBottomNavigator.NavigationOptions = navigationOptions