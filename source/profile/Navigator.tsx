import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ProfileScreen } from 'profile/screens'
import { UpdatePasswordNavigator } from './navigators'


const { Navigator, Screen } = createStackNavigator()

export const ProfileNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={ProfileScreen.NavigationOptions}
      />

      <Screen
        name='UpdatePassword'
        component={UpdatePasswordNavigator}
        options={UpdatePasswordNavigator.NavigationOptions}
      />
    </Navigator>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

ProfileNavigator.NavigationOptions = navigationOptions
