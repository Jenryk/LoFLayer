import React, { useEffect } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import GirlImage from './assets/images/lofi_girl.png'
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
  artistName:{
    color: 'snow',
    marginTop: '0.5%',
    fontSize: '16px',
    
  }
});
