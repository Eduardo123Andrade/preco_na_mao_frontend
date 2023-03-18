import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
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
        options={LoginScreen.NavigationOptions}
      />

      <Screen
        name='SingUp'
        component={SignUpNavigator}
        options={SignUpNavigator.NavigationOptions}
      />

      <Screen
        name='ForgottenPassword'
        component={ForgottenPasswordNavigator}
        options={ForgottenPasswordNavigator.NavigationOptions}
      />
    </Navigator>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

AuthenticationNavigator.NavigationOptions = navigationOptions
