import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { AuthenticationNavigator } from 'authentication';
import { useUser } from 'core/hooks';
import { HomeNavigator } from 'home';
import { ProfileNavigator } from 'profile';
import React, { useEffect } from 'react';

const { Navigator, Screen } = createStackNavigator()


export const App = () => {
  const [{ user, retrievingUserData }] = useUser()

  if (retrievingUserData)
    return <></>

  return (
    <Navigator>
      {!user?.isLogged ? (
        <Screen
          name='Authentication'
          component={AuthenticationNavigator}
          options={AuthenticationNavigator.NavigationOptions}
        />
      ) : (
        <>
          <Screen
            name='Home'
            component={HomeNavigator}
            options={HomeNavigator.NavigationOptions}
          />
          <Screen
            name='Profile'
            component={ProfileNavigator}
            options={ProfileNavigator.NavigationOptions}
          />
        </>
      )}
    </Navigator>
  );
};


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

App.NavigationOptions = navigationOptions

