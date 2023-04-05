
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { UpdatePasswordScreen, PhoneNumberScreen, ValidatePasswordScreen, CodeValidationScreen, ConfirmPhoneNumberScreen } from 'profile/screens'
import React from 'react'


const { Navigator, Screen } = createStackNavigator()

export const UpdatePhoneNumberNavigator = () => {
  return (
    <Navigator
      initialRouteName='PhoneNumberScreen'
    >
      <Screen
        name='ValidatePasswordScreen'
        component={ValidatePasswordScreen}
        options={ValidatePasswordScreen.NavigationOptions}
        initialParams={{
          nextRouterName: ''
        }}

      />
      <Screen
        name='PhoneNumberScreen'
        component={PhoneNumberScreen}
        options={PhoneNumberScreen.NavigationOptions}
      />
      <Screen
        name='CodeValidationScreen'
        component={CodeValidationScreen}
        options={CodeValidationScreen.NavigationOptions}
      />
      <Screen
        name='ConfirmPhoneNumberScreen'
        component={ConfirmPhoneNumberScreen}
        options={ConfirmPhoneNumberScreen.NavigationOptions}
      />


    </Navigator>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false
}

UpdatePhoneNumberNavigator.NavigationOptions = navigationOptions
