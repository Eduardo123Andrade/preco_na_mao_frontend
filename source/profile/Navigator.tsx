import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ProfileScreen } from 'profile/screens'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { TabBarIcon } from 'core/components'
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


const navigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarIcon: ({ focused }) => <TabBarIcon iconName='supervised-user-circle' focused={focused} />

}

ProfileNavigator.NavigationOptions = navigationOptions
