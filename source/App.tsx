import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { ApiProvider } from './core/providers';

import { HomeScreen } from './home/screens/homeScreen';


export const App = () => {
  return (
    <ApiProvider>
      <SafeAreaView >
        <HomeScreen />
      </SafeAreaView>
    </ApiProvider>
  );
};

