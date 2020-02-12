import React from 'react';
import {StyleSheet, Image} from 'react-native';
import LofiGirl from '../../assets/images/lofi_girl.png';
export function Album() {
    return(
        <Image source={LofiGirl} style={styles.album}></Image>
    )
}

const styles = StyleSheet.create({
    album: {
      width: '300px',
      height: '300px',
      borderRadius: '150px',
    }
});