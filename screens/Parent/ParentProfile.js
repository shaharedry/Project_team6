import React from 'react';
import {View, Text, StyleSheet ,Button ,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileImage from '../../components/ProfileImage';
import colors from '../../constants/Colors'

const ParentProfile = props => {
    return (
        <View style={styles.screen}>
            <Text>Parent Profile Screen</Text>
            <View style={styles.ImageContainer}>
                <Image
                    source={require('../../assets/images/ParentIcon.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
            <Button
                title="Register a child"
                onPress={() => {props.navigation.navigate({routeName:'ChildSignUp'})}}
                style={styles.buttoncontainer}
            />
            <Button
                title="Child profile"
                onPress={() => {props.navigation.navigate({routeName:'ChildProfile'})}}
                style={styles.buttoncontainer}
            />
        {/*} <Button title='Logout' onPress={this.handleSignout} /> */}
        </View>  
    /*<ScrollView>
        <View style={styles.screen}>
        <Text>Parent Profile Screen</Text>
        <Image
            source={require('../../assets/images/ParentIcon.jpg')}
            resizeMode="cover"
            style={styles.image}
        />
        <Button
            title="Add a child"
            onPress={() => {props.navigation.navigate({routeName:'ChildSignUp'})}}
        />
        <Button
            title="Child profile"
            onPress={() => {props.navigation.navigate({routeName:'ChildProfile'})}}
        />
        </View>
    </ScrollView>*/
    
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
    },
    buttonContainer:{
        width: 250,
        height: 150,
        justifyContent: 'center',
        paddingBottom: 100 ,
        paddingTop: 10,
        borderRadius: 10
    }
})

export default ParentProfile;