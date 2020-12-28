/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {WebView} from 'react-native-webview';

import {StyleSheet} from 'react-native';

const App: () => React$Node = () => {
  return (
    <WebView 
      source={{uri: 'https://mapa.sus.ce.gov.br'}} style={{marginTop: 20}} 
      />
  );
};

export default App;
