import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator, View } from 'react-native';
import {useState} from 'react'
import theme from '@theme/index';

import {Groups} from '@screens/Groups';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })


  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? 
        <Groups /> :  
        <ActivityIndicator color="red"/>
      }
     </ThemeProvider>
  );
}

