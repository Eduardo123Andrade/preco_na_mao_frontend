
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { UpdatePasswordScreen, UpdatePhoneNumber, ValidatePasswordScreen } from 'profile/screens'
import React from 'react'


const { Navigator, Screen } = createStackNavigator()

export const UpdatePhoneNumberNavigator = () => {
  return (
    <Navigator
      initialRouteName='UpdatePhoneNumber'
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
        name='UpdatePhoneNumber'
        component={UpdatePhoneNumber}
        options={UpdatePhoneNumber.NavigationOptions}
      />
    </Navigator>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false
}

UpdatePhoneNumberNavigator.NavigationOptions = navigationOptions
