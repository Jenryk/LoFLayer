import React from 'react';
import {Image, View, StyleS} from 'react-native';
import {styles} from './styles'
import LofiGirl from '../../assets/images/lofi_girl.png';
import PauseButton from '../../assets/images/pause.png'
export function Album() {
    return(
        <View>
        <Image source={LofiGirl} style={styles.albumStyle}></Image>
        <Image source={PauseButton} style={styles.playerButton}></Image>
        </View>
    )
}

