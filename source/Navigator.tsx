import React from 'react';
import { ApiProvider, HttpQueryProvider, UserProvider } from 'core/providers';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { App } from './App';

const { Navigator, Screen } = createStackNavigator()


export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <ApiProvider>
          <HttpQueryProvider>
            <NavigationContainer>
              <Navigator>
                <Screen
                  name='App'
                  component={App}
                  options={App.NavigationOptions}
                />
              </Navigator>
            </NavigationContainer>
          </HttpQueryProvider>
        </ApiProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
};

