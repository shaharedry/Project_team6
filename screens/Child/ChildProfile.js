import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Image, Button} from 'react-native';
import colors from '../../constants/Colors'

const ChildProfile = props => {

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