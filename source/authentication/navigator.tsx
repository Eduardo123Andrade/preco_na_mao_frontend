import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { ForgottenPasswordNavigator, SignUpNavigator } from './navigators'
import { LoginScreen, WelcomeScreen } from './screens'


const { Navigator, Screen } = createStackNavigator()


export const AuthenticationNavigator = () => {
  return (
    <Navigator defaultScreenOptions={{ headerShown: false }}>
      <Screen
        name='Welcome'
        component={WelcomeScreen}
        options={WelcomeScreen.NavigationOptions}
      />
      <Screen
        name='Login'
        component={LoginScreen}
        options={LoginScreen.NavigationOptions}
      />

      <Screen
        name='SingUp'
        component={SignUpNavigator}
        options={SignUpNavigator.NavigationOptions}
      />
    </Navigator>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

AuthenticationNavigator.NavigationOptions = navigationOptions
