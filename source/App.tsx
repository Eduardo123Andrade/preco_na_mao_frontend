import React from 'react';
import { ApiProvider, UserProvider } from './core/providers';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticationNavigator } from 'authentication';
import { HomeNavigator } from 'home';

const { Navigator, Screen } = createStackNavigator()


export const App = () => {
  return (
    <SafeAreaProvider >
      <ApiProvider>
        <UserProvider>
          <NavigationContainer>
            <Navigator>
              <Screen
                name='AuthenticationNavigator'
                component={AuthenticationNavigator}
                options={{
                  headerShown: false
                }}
              />

              <Screen
                name='HomeNavigator'
                component={HomeNavigator}
                options={{
                  headerShown: false
                }}
              />

            </Navigator>
          </NavigationContainer>
        </UserProvider>
      </ApiProvider>
    </SafeAreaProvider>
  );
};

