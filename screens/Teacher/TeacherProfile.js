import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import colors from '../../constants/Colors'

import { LogBox } from 'react-native'; /// unfreeze for running on phones

LogBox.ignoreLogs(['Setting a timer']); /// unfreeze for running on phones

const TeacherProfile = props => {

    const [user, setUser] = useState()

    useEffect(() => {
        _retrieveData();
    }, []); 

    _retrieveData= async () => {
        try{
            AsyncStorage.getItem('TeacherFullname')
                .then(value => {
                    if(value!= null) {
                        setUser(value)
                    }
                })
        } catch (error){
            console.warn(error)
        }
    } 

    return (
        <View style={styles.screen}>
            <Text>Teacher Profile Screen</Text>
            <Text>Hello {user}</Text> 
            <View style={styles.ImageContainer}>
                <Image
                    source={require('../../assets/images/TeacherIcon.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                    />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="Enter Grades"
                    onPress={() => {
                        props.navigation.navigate({routeName:'EnterGrades'})}
                    }
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="Enter presence"
                    onPress={() => props.navigation.navigate({routeName:'EnterPresence'})}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="Viewing grades"
                    onPress={() => props.navigation.navigate({routeName:'ViewGrades'})}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="Viewing presence"
                    //onPress={() => props.navigation.navigate({routeName:'ViewPresence'})}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="create Class"
                    onPress={() => props.navigation.navigate({routeName:'createClass'})}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                title="Watch School Details"
                onPress={() => props.navigation.navigate({routeName:'SchoolDetails'})}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="Subtraction Confirmation"
                    onPress={() => props.navigation.navigate({routeName:'SubtractionConfirmation'})}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="Presence Correction"
                    onPress={() => props.navigation.navigate({routeName:'PresenceCorrection'})}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button
                    title="Score Correction"
                    onPress={() => props.navigation.navigate({routeName:'ScoreCorrection'})}
                />
            </View>
        </View>   
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding : 25,
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonContainer:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        paddingBottom: 10 ,
        paddingTop: 10,
        borderRadius: 10,
        color: 'red'
    }
})



export default TeacherProfile;