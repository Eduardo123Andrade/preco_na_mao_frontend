import { createStackNavigator } from '@react-navigation/stack'
import { Login } from 'authentication/screens'
// import { Login } from '../authentication/screens'
import React from 'react'
import { Screen2 } from './screens'


const { Navigator, Screen } = createStackNavigator()

export const HomeNavigator = () => {
  return (
    <Navigator defaultScreenOptions={{
      headerShown: false
    }}>
      <Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}