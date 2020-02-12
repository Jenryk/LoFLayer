import React, { useEffect } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import GirlImage from './assets/images/lofi_girl.png'
import * as Font from 'expo-font'
export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'Montserrat' : require('./assets/fonts/Montserrat-Regular.ttf'),
      'Roboto' : require('./assets/fonts/Roboto-Regular.ttf')
    })
  })
  return (
    <View style={styles.container}>
      <Text style={styles.songTitle}>Song Name</Text>
      <Image source={GirlImage} style={styles.album}/>
      <Text style={styles.artistName}>Artist Name</Text>
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
  album: {
    width: '300px',
    height: '300px',
    borderRadius: '150px',
  },
  songTitle: {
    marginBottom: '2%',
    color: 'snow',
    fontFamily: 'Montserrat',
    fontSize: '30px',
  },
  artistName:{
    color: 'snow',
    marginTop: '0.5%',
    fontSize: '16px',
    
  }
});
