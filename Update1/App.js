import { StyleSheet, Text, View } from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './scr/routes';

enableLatestRenderer();

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
