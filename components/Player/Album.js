import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles'
import LofiGirl from '../../assets/images/lofi_girl.png';
export function Album() {
    return(
        <Image source={LofiGirl} style={styles.album}></Image>
    )
}

