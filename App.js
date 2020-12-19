import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { StatusBar } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import AppProvider from './src/context';
import AppNavigator from './src/AppNavigator';

export default function App () {
	// load fonts
  const [loaded] = useFonts({
    Sohne300: require('./assets/fonts/sohne-300-normal.ttf'),
    Sohne500: require('./assets/fonts/sohne-500-normal.ttf'),
    Sohne700: require('./assets/fonts/sohne-700-normal.ttf'),
    GTSuper: require('./assets/fonts/gt-super-400-normal.ttf'),
  });

  return !loaded ? (
  	// show loading screen
	  <AppLoading/>
  ) : (
    <AppProvider>
      <StatusBar style='dark-content'/>
      <AppNavigator />
    </AppProvider>
  );
};
