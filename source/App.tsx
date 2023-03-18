import React from 'react';
import { ApiProvider, HttpQueryProvider, UserProvider } from './core/providers';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticationNavigator } from 'authentication';
import { HomeNavigator } from 'home';

const { Navigator, Screen } = createStackNavigator()


export const App = () => {
  return (
    <SafeAreaProvider>
      <HttpQueryProvider>
        <ApiProvider>
          <UserProvider>
            <NavigationContainer>
              <Navigator>
                <Screen
                  name='Authentication'
                  component={AuthenticationNavigator}
                  options={{
                    headerShown: false
                  }}
                />

                <Screen
                  name='Home'
                  component={HomeNavigator}
                  options={{
                    headerShown: false
                  }}
                />

              </Navigator>
            </NavigationContainer>
          </UserProvider>
        </ApiProvider>
      </HttpQueryProvider>
    </SafeAreaProvider>
  );
};

