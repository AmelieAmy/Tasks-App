import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


const CountersContainer = ({nbTasks, nbTasksCompleted}) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstCounter}>
                <Text style={styles.nb}>{nbTasks}</Text>
                <Text style={styles.title}>{nbTasks > 1 ? "Taches créées" : "Tache créée"}</Text>
            </View>
            <View style={styles.scdCounter}>
                <Text style={styles.nb}>{nbTasksCompleted()}</Text>
                <Text style={styles.title}>{nbTasksCompleted() > 1 ? "Taches complétées" : "Tache complétée"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 50
    },
    
    firstCounter: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },

    scdCounter: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end"
    },

    nb: {
        fontWeight: "bold"
    },

    title: {
        color: "grey"
    }

})

export default CountersContainer
