import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../config/Firebase'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser} from '../actions/user'

class TypeSignin extends React.Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return(
            <View style={styles.screen}>
                <View style={styles.buttonContainer}>
                    <Button title="Teacher" onPress={() => {this.props.navigation.navigate('Login')}} color={Colors.secondery}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Perent" onPress={() => {this.props.navigation.navigate('Login')}} color={Colors.secondery}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Child" onPress={() => {this.props.navigation.navigate('Login')}} color={Colors.secondery}/>
                </View>
            </View>
            );
          }
    };

const styles = StyleSheet.create({
    buttonContainer:{
        width: 250,
        height: 150,
        justifyContent: 'center',
        paddingBottom: 100 ,
        borderRadius: 10
    }
})


export default (TypeSignin)