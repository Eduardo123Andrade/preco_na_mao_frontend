import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { HomeBottomNavigator } from './navigators'
import { CurrentShoppingListProvider } from './providers'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigator = () => {
  return (
    <CurrentShoppingListProvider>
      <Navigator>
        <Screen
          name='HomeScreen'
          component={HomeBottomNavigator}
          options={HomeBottomNavigator.NavigationOptions}
        />
      </Navigator>
    </CurrentShoppingListProvider>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

HomeNavigator.NavigationOptions = navigationOptions
