import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { ApiProvider } from './core/providers';


import { NavigationContainer } from '@react-navigation/native'
import { HomeNavigator } from './home/Navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home/screens/homeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { Navigator, Screen } = createStackNavigator()


export const App = () => {
  return (
    <SafeAreaProvider >
      <ApiProvider>
        <NavigationContainer>
          <Navigator>
            <Screen
              name='HomeNavigator'
              component={HomeNavigator}
              options={{
                headerShown: false
              }}
            />
          </Navigator>
        </NavigationContainer>
      </ApiProvider>
    </SafeAreaProvider>
  );
};

