import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { UpdatePasswordScreen, ValidatePasswordScreen } from 'profile/screens'
import React from 'react'


const { Navigator, Screen } = createStackNavigator()

export const UpdatePasswordNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='ValidatePasswordScreen'
        component={ValidatePasswordScreen}
        options={ValidatePasswordScreen.NavigationOptions}
      />
      <Screen
        name='UpdatePasswordScreen'
        component={UpdatePasswordScreen}
        options={UpdatePasswordScreen.NavigationOptions}
      />
    </Navigator>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false
}

UpdatePasswordNavigator.NavigationOptions = navigationOptions
