import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from 'home/screens'
import { ProfileNavigator } from 'profile'
import { ProfileScreen } from 'profile/screens'
import React from 'react'

const { Navigator, Screen } = createBottomTabNavigator()

export const HomeBottomNavigator = () => {
  return (
    <Navigator>
      <Screen name='Home' component={HomeScreen} />
      <Screen name='Profile' component={ProfileNavigator} options={ProfileNavigator.NavigationOptions} />
    </Navigator>
  )
}