/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Routes from './src/Routes/routes';
import colors from './src/UI/colors';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <Routes />
    </>
  );
};

export default App;
