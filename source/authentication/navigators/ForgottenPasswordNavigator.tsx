import { RouteProp, useRoute } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { ForgottenPasswordProvider } from "authentication/providers"
import { ForgottenPasswordAccessTokenValidationScreen, ForgottenPasswordCpfScreen } from "authentication/screens"
import React from 'react'

interface RouterParameter {
  cpf: string
}

type RootStackParamList = {
  ForgottenPasswordNavigator: RouterParameter
}

type ForgottenPasswordNavigatorRouteProp = RouteProp<
  RootStackParamList,
  'ForgottenPasswordNavigator'
>

const { Navigator, Screen } = createStackNavigator()


export const ForgottenPasswordNavigator = () => {
  const router = useRoute<ForgottenPasswordNavigatorRouteProp>()
  const { cpf } = router.params ?? {}

  return (
    // <ForgottenPasswordProvider cpf={cpf}>
    <ForgottenPasswordProvider cpf='09907658499'>
      <Navigator
        initialRouteName="ForgottenPasswordAccessTokenValidationScreen"
      >
        <Screen
          name="ForgottenPasswordCpfScreen"
          component={ForgottenPasswordCpfScreen}
        />
        <Screen
          name="ForgottenPasswordAccessTokenValidationScreen"
          component={ForgottenPasswordAccessTokenValidationScreen}
        />
      </Navigator>
    </ForgottenPasswordProvider>
  )
}