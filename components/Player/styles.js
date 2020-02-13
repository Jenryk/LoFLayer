import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    songTitle: {
        marginBottom: '2%',
        color: 'snow',
        fontFamily: 'Montserrat',
        fontSize: 35,
    },
    nextButton: {
        width: 90,
        height: 90,
        tintColor: 'white',
    },
    previousButton: {
        width: 90,
        height: 90,
        tintColor: 'white',
        transform: [{scaleX: -1}]
    },
    playerButton: {
        width: 150,
        height: 150,
        position: 'absolute',
        right: 25,
        top: 20,
        tintColor: 'white',
    },
    albumStyle: {
        opacity: 0.8,
        width: 200,
        height: 200,
        borderRadius: 150,
    },
    artistName:{
        color: 'snow',
        marginTop: '1%',
        fontSize: 20,    
    }
})