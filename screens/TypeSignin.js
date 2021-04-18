import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../config/Firebase'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser} from '../actions/user'
import Colors from '../constants/Colors'

class TypeSignin extends React.Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return(
                <View style={styles.screen}>
                <View style={styles.buttonContainer}>
                    <Button title="Sign In as Teacher" onPress={() => {this.props.navigation.navigate('TLogin')}} color={Colors.secondery}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Sign In as Parent" onPress={() => {this.props.navigation.navigate('PLogin')}} color={Colors.secondery}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Sign In as Child" onPress={() => {this.props.navigation.navigate('CLogin')}} color={Colors.secondery}/>
                </View>
            </View>
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
})


export default (TypeSignin)