import React from 'react';
import {View, Text, StyleSheet , Button } from 'react-native';
import colors from '../../constants/Colors'

const EnterPresence = props => {
    return (
        <View style={styles.container}>
            <Text>Enter Presence</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EnterPresence;