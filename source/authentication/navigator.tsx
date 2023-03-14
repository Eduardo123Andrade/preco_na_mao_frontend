import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Login } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigator = () => {
  return (
    <Navigator defaultScreenOptions={{
      headerShown: false
    }}>
      <Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}