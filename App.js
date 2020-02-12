import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'Montserrat' : require('./assets/fonts/Montserrat-Regular.ttf')
    })
  })
  return (
    <View style={styles.container}>
      <Text style={{color:'snow', fontFamily:'Montserrat'}}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
