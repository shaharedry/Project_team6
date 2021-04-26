import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';


class FirstScreen extends React.Component {
    render(){
      return(
        <View style={styles.screen}>
            <View style={styles.buttonContainer}>
                <Button title="Sign In" onPress={() => {this.props.navigation.navigate('TypeSignin')}} color='#1e90ff'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={() => {this.props.navigation.navigate('Signup')}} color='#1e90ff'/>
            </View>
        </View>
        //matandbaa
        );
      }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding : 100,
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        width: 250,
        height: 150,
        justifyContent: 'center',
        paddingBottom: 100 ,
        borderRadius: 10
    }
});

export default (FirstScreen)