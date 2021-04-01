import React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const FlottingButton = ({toggleForm, isFormOpened}) => {
    return (
        <TouchableOpacity onPress={toggleForm} style={styles.container}>
            {isFormOpened ?
                <Image style={styles.icon} source={require('../../../../assets/button_closing.png')} />
            :
                <Image style={styles.icon} source={require('../../../../assets/button_plus.png')} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
        justifyContent: "center"
    },

    icon: {
        width: 50,
        height: 50,
    }

})

export default FlottingButton
