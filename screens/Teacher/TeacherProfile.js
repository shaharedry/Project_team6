import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { AsyncStorage } from 'react-native-async-storage';
import colors from '../../constants/Colors'


const TeacherProfile = props => {

    const [user, setUser] = useState()

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        if (loggedInUser) {
            console.log(loggedInUser);
            setUser(loggedInUser);
        }
    }, []);

    return (
        <View style={styles.screen}>
            <Text>Teacher Profile Screen</Text>
            <Text>Hello {(user)}</Text> 
            <View style={styles.ImageContainer}>
                <Image
                    source={require('../../assets/images/TeacherIcon.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                    />
            </View>

            <View style={styles.buttonContainer}>

                <Button
                    title="Enter Grades"
                    onPress={() => {
                        props.navigation.navigate({routeName:'EnterGrades'})}
                    }
                />

                </View>
                <View style={styles.buttonContainer}>

                <Button
                    title="Enter presence"
                    onPress={() => props.navigation.navigate({routeName:'EnterPresence'})}
                />

                </View>
                <View style={styles.buttonContainer}>
                <Button
                    title="Viewing grades"
                    onPress={() => props.navigation.navigate({routeName:'ViewGrades'})}
                />
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    title="Viewing presence"
                    onPress={() => props.navigation.navigate({routeName:'ViewPresence'})}
                />
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    title="create Class"
                    onPress={() => props.navigation.navigate({routeName:'createClass'})}
                />
                </View>

        </View>
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,

        padding : 50,
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
        paddingBottom: 100 ,
        borderRadius: 10
    }
})



export default TeacherProfile;