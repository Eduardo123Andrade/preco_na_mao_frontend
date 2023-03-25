import { RouteProp, useRoute } from "@react-navigation/native"
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import { ForgottenPasswordProvider } from "authentication/providers"
import { ForgottenPasswordAccessTokenValidationScreen, ForgottenPasswordCpfScreen, ForgottenPasswordUpdatePasswordScreen } from "authentication/screens"
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
  const { cpf } = router.params

  return (
    <ForgottenPasswordProvider cpf={cpf}>
      <Navigator>
        <Screen
          name="ForgottenPasswordCpfScreen"
          component={ForgottenPasswordCpfScreen}
          options={ForgottenPasswordCpfScreen.NavigationOptions}
        />
        <Screen
          name="ForgottenPasswordAccessTokenValidationScreen"
          component={ForgottenPasswordAccessTokenValidationScreen}
          options={ForgottenPasswordAccessTokenValidationScreen.NavigationOptions}
        />

        <Screen
          name="ForgottenPasswordUpdatePasswordScreen"
          component={ForgottenPasswordUpdatePasswordScreen}
          options={ForgottenPasswordUpdatePasswordScreen.NavigationOptions}
        />
      </Navigator>
    </ForgottenPasswordProvider>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false
}

ForgottenPasswordNavigator.NavigationOptions = navigationOptions