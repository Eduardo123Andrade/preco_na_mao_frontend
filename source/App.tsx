import React from 'react';
import {
  SafeAreaView, StyleSheet
} from 'react-native';

import { HomeScreen } from './home/screens/homeScreen';
import { ApiProvider } from './providers/ApiProvider';


export const App = () => {
  return (
    <ApiProvider>
      <SafeAreaView >
        <HomeScreen />
      </SafeAreaView>
    </ApiProvider>
  );
};

