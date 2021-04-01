import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Counter = ({nb, title}) => {
    return (
        <View style={styles.counter}>
            <Text style={styles.nb}>{nb}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    counter: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },

    nb: {
        fontWeight: "bold"
    },

    title: {
        color: "grey"
    }

})

export default Counter
