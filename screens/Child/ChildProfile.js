import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Image, Button} from 'react-native';
import colors from '../../constants/Colors'

const ChildProfile = props => {

    const [user, setUser] = useState()
    const [userEmail, setUserEmail] = useState()

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        const loggedInUserEmail = localStorage.getItem("email");
        console.log(loggedInUser);
        if (loggedInUser) {
            //const foundUser = JSON.parse(loggedInUser);
            //console.log(loggedInUser);
            console.log(loggedInUser);
            setUser(loggedInUser);
            setUserEmail(loggedInUserEmail)
            //var restoredSession = JSON.parse(localStorage.getItem('loggedInUser'))
        }
    }, []); 

    function ls_read(name){
        return JSON.parse(localStorage.getItem(name));
    };  

    /*function getValue(key) {
        var session = JSON.parse(localStorage.getItem('loggedInUser'));
        return session.myValues[key];
      }*/

    return (
        <View style={styles.screen}>
            <Text>Child Profile Screen</Text>
            <Text>Hello {(user)}, ur email is : {(userEmail)}</Text>
            
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
        width: 300,
        height: 300,
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