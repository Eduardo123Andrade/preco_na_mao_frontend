import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { UpdatePasswordScreen } from 'profile/screens'
import React from 'react'


const { Navigator, Screen } = createStackNavigator()

export const UpdatePasswordNavigator = () => {
  return (
    <Navigator>
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
