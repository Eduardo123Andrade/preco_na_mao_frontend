/**
 * @format
 */

import { AppNavigator } from './source/Navigator';
import { AppRegistry } from 'react-native';
// import { App } from './source/App';
// import { App } from './source/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
