import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ProfileScreen } from 'profile/screens'
import { UpdatePasswordNavigator, UpdatePhoneNumberNavigator } from './navigators'
import { defaultScreenOptions } from 'core/utils'


const { Navigator, Screen } = createStackNavigator()

export const ProfileNavigator = () => {
  return (
    <Navigator screenOptions={defaultScreenOptions}>
      <Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={ProfileScreen.NavigationOptions}
      />

      <Screen
        name='UpdatePhoneNumber'
        component={UpdatePhoneNumberNavigator}
        options={UpdatePhoneNumberNavigator.NavigationOptions}
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
