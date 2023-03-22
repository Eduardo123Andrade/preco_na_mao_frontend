import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { HomeBottomNavigator } from './navigators'
import { HomeScreen } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='HomeScreen'
        component={HomeBottomNavigator}
        options={HomeScreen.NavigationOptions}
      />
    </Navigator>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

HomeNavigator.NavigationOptions = navigationOptions
