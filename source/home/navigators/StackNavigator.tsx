import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from 'home/screens'
import React from 'react'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigatorNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='HomeScreen'
        component={HomeScreen}
        options={HomeScreen.NavigationOptions}
      />
    </Navigator>
  )
}


const navigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

HomeNavigatorNavigator.NavigationOptions = navigationOptions
