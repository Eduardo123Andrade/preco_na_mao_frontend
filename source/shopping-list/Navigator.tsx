import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { ShoppingListHomeScreen } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const ShoppingListNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='ShoppingListHomeScreen'
        component={ShoppingListHomeScreen}
        options={ShoppingListHomeScreen.NavigationOptions}
      />
    </Navigator>
  )
}


const navigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

ShoppingListNavigator.NavigationOptions = navigationOptions
