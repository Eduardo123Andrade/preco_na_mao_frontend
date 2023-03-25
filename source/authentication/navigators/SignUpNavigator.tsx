import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import { SingUpProvider } from "authentication/providers"
import { SingUpCpfScreen, SingUpNameScreen, SingUpPasswordScreen, SingUpPhoneScreen } from "authentication/screens"
import React from 'react'

const { Navigator, Screen } = createStackNavigator()

export const SignUpNavigator = () => {
  return (
    <SingUpProvider>
      <Navigator>
        <Screen
          name="SingUpNameScreen"
          component={SingUpNameScreen}
          options={SingUpNameScreen.NavigationOptions}
        />

        <Screen
          name="SingUpCpfScreen"
          component={SingUpCpfScreen}
          options={SingUpCpfScreen.NavigationOptions}
        />

        <Screen
          name="SingUpPhoneScreen"
          component={SingUpPhoneScreen}
          options={SingUpPhoneScreen.NavigationOptions}
        />

        <Screen
          name="SingUpPasswordScreen"
          component={SingUpPasswordScreen}
          options={SingUpPasswordScreen.NavigationOptions}
        />

      </Navigator>
    </SingUpProvider>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

SignUpNavigator.NavigationOptions = navigationOptions
