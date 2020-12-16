import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { StatusBar } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import AppProvider from './src/context';
import AppNavigator from './src/AppNavigator.jsx';

export default function App () {
	// load fonts
  const [loaded] = useFonts({});
  // const [isReady, setIsReady] = useState(false);

  // const _cacheResourcesAsync = async () => {
  //   const images = [require('./assets/logo-white.png')];

  //   const cacheImages = images.map(image => {
  //     return Asset.fromModule(image).downloadAsync();
  //   });
  //   return Promise.all(cacheImages);
  // }

  return !loaded /*&& !isReady*/ ? (
  	// show loading screen
	  <AppLoading
	    // startAsync={_cacheResourcesAsync}
	    // onFinish={() => setIsReady(true)}
	    // onError={console.warn}
	  />
  ) : (
    <AppProvider>
      <StatusBar style='dark'/>
      <AppNavigator />
    </AppProvider>
  );
};
