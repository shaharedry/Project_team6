import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';
import Card from '../components/Card';
import colors from '../constants/colors';

const FirstScreen = props => {
      return(
        <View style={styles.screen}>
            <Card style={styles.inputcontainer}>
            <View style={styles.buttonContainer}>
                <Button title="Sign In" onPress={() => {
                    props.navigation.navigate({routeName: 'TypeSignin'});}} 
                    color={colors.secondary}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={() => {
                    props.navigation.navigate({routeName: 'Signup'});}} 
                    color={colors.secondary}/>
            </View>
            </Card>
        </View>
        );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    buttoncontainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 90,
        paddingBottom: 35,
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 30
    },
    inputcontainer:{
        width: 400,
        maxWidth: '80%',
        alignItems: 'center',
    }, 
    input: {
        width:50,
        textAlign:'center'
    }

});

export default (FirstScreen)