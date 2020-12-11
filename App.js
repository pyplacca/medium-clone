import React from 'react';
import { useFonts } from '@use-expo/font';
import { StatusBar } from 'react-native';
import SettingsProvider from './src/context/appSettings';
import AppNavigator from './src/AppNavigator';

export default function App () {
  const [loaded] = useFonts({

  });

  return !loaded ? null : (
    <SettingsProvider>
      <StatusBar style='dark'/>
      <AppNavigator />
    </SettingsProvider>
  );
};
