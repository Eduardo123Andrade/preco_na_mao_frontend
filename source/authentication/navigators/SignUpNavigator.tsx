import { createStackNavigator } from "@react-navigation/stack"
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
        />

        <Screen
          name="SingUpCpfScreen"
          component={SingUpCpfScreen}
        />
        <Screen
          name="SingUpPhoneScreen"
          component={SingUpPhoneScreen}
        />

        <Screen
          name="SingUpPasswordScreen"
          component={SingUpPasswordScreen}
        />

      </Navigator>
    </SingUpProvider>
  )
}