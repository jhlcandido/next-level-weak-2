import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

if (__DEV__) {
  import('./src/services/ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  );
}
import AppStacks from './src/routes/AppStacks';
import { light } from './src/styles/themes/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar style="light" />
      <AppStacks />
    </ThemeProvider>
  );
}
