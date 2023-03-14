import { createStackNavigator } from '@react-navigation/stack'
import { Login } from 'authentication/screens'
import React from 'react'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigator = () => {
  return (
    <Navigator defaultScreenOptions={{
      headerShown: false
    }}>
      <Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}