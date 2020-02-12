import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';
import * as Font from 'expo-font'
import {Root} from './components/Root'
export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'Montserrat' : require('./assets/fonts/Montserrat-Regular.ttf'),
      'Roboto' : require('./assets/fonts/Roboto-Regular.ttf')
    })
  })
  return (
    <Root/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
