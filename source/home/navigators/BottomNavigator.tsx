import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProfileNavigator } from 'profile'
import React from 'react'
import { ShoppingListNavigator } from 'shopping-list'
import { HomeNavigatorNavigator } from './StackNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

export const HomeBottomNavigator = () => {
  return (
    <Navigator
      initialRouteName='Home'
    >
      <Screen name='Profile' component={ProfileNavigator} options={ProfileNavigator.NavigationOptions} />
      <Screen name='Home' component={HomeNavigatorNavigator} options={HomeNavigatorNavigator.NavigationOptions} />
      <Screen name='ShoppingList' component={ShoppingListNavigator} options={ShoppingListNavigator.NavigationOptions} />
    </Navigator>
  )
}