import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen, Screen2 } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigator = () => {
  return (
    <Navigator defaultScreenOptions={{
      headerShown: false
    }}>
      <Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name='Screen2'
        component={Screen2}
      />
    </Navigator>
  )
}