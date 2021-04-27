import React from 'react';
import {View, Text, StyleSheet ,Button } from 'react-native';
import colors from '../../constants/Colors'
import * as firebase from 'firebase'

const TeacherLogin = props => {
    
    return (
        <View style={styles.screen}>
            <Text>Teacher Login Screen</Text>
            <View style={styles.buttoncontainer}>
                        <Button title="Login" onPress={() => {
                            props.navigation.navigate({routeName: 'TeacherProfile'})
                        }} color={colors.secondery} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TeacherLogin;