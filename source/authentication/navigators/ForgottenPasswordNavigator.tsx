import { createStackNavigator } from "@react-navigation/stack"
import { ForgottenPasswordProvider } from "authentication/providers"
import { ForgottenPasswordCpfScreen } from "authentication/screens"
import React from 'react'

const { Navigator, Screen } = createStackNavigator()


export const ForgottenPasswordNavigator = () => {
  return (
    <ForgottenPasswordProvider cpf="09907658499" >
      <Navigator>
        <Screen
          name="ForgottenPasswordCpfScreen"
          component={ForgottenPasswordCpfScreen}
        />

      </Navigator>
    </ForgottenPasswordProvider>
  )
}