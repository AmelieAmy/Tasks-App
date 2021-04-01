import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
]

const months = [
    "Janv",
    "Fev",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
]

const Header = () => {
    const date = new Date();

    return(
        <View style={styles.container}>
            <Text>
                <Text style={styles.title}>{days[date.getDay()] + ", "}</Text>
                <Text style={styles.scdTitle}>{date.getDate() + " " + months[date.getMonth()]}</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        marginTop: 40,
        paddingTop: 20,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#F0F0F0",
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
    },

    scdTitle: {
        fontSize: 23,
        fontWeight: "normal",
    }

});

export default Header;