import React from 'react';
import SettingsProvider from './src/context/appSettings';
import { AppNavigator } from './src/navigators';

export default function App() {
  return (
    <SettingsProvider>
      <AppNavigator />
    </SettingsProvider>
  );
};
