import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { ShoppingListNavigator } from 'shopping-list'
import { HomeNavigatorNavigator } from './StackNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

export const HomeBottomNavigator = () => {
  return (
    <Navigator screenOptions={bottomNavigationStyles}>
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

const bottomNavigationStyles: BottomTabNavigationOptions = {
  tabBarActiveTintColor: '#008000',
  tabBarInactiveTintColor: "#8FBC8F",
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: "#9BD9D4",
  }
}