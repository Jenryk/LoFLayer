import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    songTitle: {
        marginBottom: '2%',
        color: 'snow',
        fontFamily: 'Montserrat',
        fontSize: '35px',
    },
    nextButton: {
        width: '125px',
        height: '125px',
        tintColor: 'white',
    },
    previousButton: {
        width: '125px',
        height: '125px',
        tintColor: 'white',
    },
    playerButton: {
        width: '150px',
        height: '150px',
        position: "absolute",
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        display: 'block',
        margin: 'auto',
        tintColor: 'white',
    },
    albumStyle: {
        opacity: '50%',
        width: '300px',
        height: '300px',
        borderRadius: '150px',
    },
    artistName:{
        color: 'snow',
        marginTop: '1%',
        fontSize: '20px',    
    }
})