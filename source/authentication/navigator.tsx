import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SignUpNavigator } from './navigators'
import { Login } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const AuthenticationNavigator = () => {
  return (
    <Navigator
      defaultScreenOptions={{ headerShown: false }}>

      <Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />

      <Screen
        name='SingUp'
        component={SignUpNavigator}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}