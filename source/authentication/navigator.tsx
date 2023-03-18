import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ForgottenPasswordNavigator, SignUpNavigator } from './navigators'
import { LoginScreen } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const AuthenticationNavigator = () => {
  return (
    <Navigator defaultScreenOptions={{ headerShown: false }}>
      <Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Screen
        name='SingUp'
        component={SignUpNavigator}
        options={{ headerShown: false }}
      />

      <Screen
        name='ForgottenPassword'
        component={ForgottenPasswordNavigator}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}