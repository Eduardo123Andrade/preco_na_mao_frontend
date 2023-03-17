import { createStackNavigator } from "@react-navigation/stack"
import { SingUpProvider } from "authentication/providers"
import { SingUpCpfScreen } from "authentication/screens"
import React from 'react'

const { Navigator, Screen } = createStackNavigator()


export const SignUpNavigator = () => {
  return (
    <SingUpProvider>
      <Navigator>
        <Screen
          name="SingUpCpfScreen"
          component={SingUpCpfScreen}
        />
      </Navigator>
    </SingUpProvider>
  )
}