import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Login, SingUp } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const AuthenticationNavigator = () => {
  return (
    <Navigator
      initialRouteName='SingUp'
      defaultScreenOptions={{ headerShown: false }}>

      <Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />

      <Screen
        name='SingUp'
        component={SingUp}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}