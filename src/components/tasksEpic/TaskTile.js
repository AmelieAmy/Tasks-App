import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask}) => {
    
    return (
        <TouchableOpacity onPress={() => onChangeStatus(id)} >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Image style={styles.icon} source={completed ? require('../../../assets/icon_check.png') : require('../../../assets/icon_circle.png')} />
                    <Text style={[styles.title, {color: completed ? "grey" : "black"}]} >{title}</Text>
                </View>
                <TouchableOpacity onPress={() => onDeleteTask(id)} >
                    <Image style={styles.icon} source={require('../../../assets/icon_bin.png')} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    icon: {
        width: 30,
        height: 30
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
    },

    subContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    title: {
        marginLeft: 30
    }

});

export default TaskTile;
