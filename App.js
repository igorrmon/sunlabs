/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import Routes from './src/Routes/routes';

const App: () => React$Node = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
