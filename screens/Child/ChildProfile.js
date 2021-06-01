import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Image, Button} from 'react-native';
import colors from '../../constants/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChildProfile = props => {

    const [user, setUser] = useState()

    useEffect(() => {
        _retrieveData();
    }, []); 

    _retrieveData= async () => {
        try{
            AsyncStorage.getItem('ChildFullname')
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
            <Text>Child Profile Screen</Text>
            <Text>Hello {(user)}</Text>   
            <View style={styles.ImageContainer}>
                <Image
                    source={require('../../assets/images/ChildIcon.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
            <Button
                title="Watch Grades"
                onPress={() => props.navigation.navigate({routeName:'WatchGrades'})}
            />
                
            <Button
                title="Watch Presence"
                onPress={() => props.navigation.navigate({routeName:'WatchPresence'})}
            />

           <Button
                title="Watch School Details"
                onPress={() => props.navigation.navigate({routeName:'SchoolDetails'})}
            /> 
            {/*<Button title='Logout' onPress={this.handleSignout} />*/}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    }
})

export default ChildProfile;