import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

HomeNavigator.NavigationOptions = navigationOptions
