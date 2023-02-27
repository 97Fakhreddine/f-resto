import 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import { APIProvider } from '@/api';
import { hydrateAuth } from '@/core';
import { RootNavigator } from '@/navigation';
import useCachedResources from './core/useCachedResources';

hydrateAuth();
SplashScreen.preventAutoHideAsync();


const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <BottomSheetModalProvider>
        <APIProvider>
          <RootNavigator />
          <FlashMessage position="top" />
        </APIProvider>
      </BottomSheetModalProvider>
    );
  }
};

export default App;
