import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ChildSignUp = props => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                //value={this.props.email}
                //onChangeText={email => this.props.updateEmail(email)}
                placeholder='User name'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.inputBox}
                //value={this.props.email}
                //onChangeText={email => this.props.updateEmail(email)}
                placeholder='Email'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.inputBox}
                //value={this.props.password}
                //onChangeText={password => this.props.updatePassword(password)}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TextInput
                style={styles.inputBox}
                //value={this.props.password}
                //onChangeText={password => this.props.updatePassword(password)}
                placeholder='School name'
                secureTextEntry={true}
            />
            <TextInput
                style={styles.inputBox}
                //value={this.props.password}
                //onChangeText={password => this.props.updatePassword(password)}
                placeholder='ID'
                secureTextEntry={true}
            />
            {/*<TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                <Text style={styles.buttonText}>Add A Child</Text>
            </TouchableOpacity>
            */}
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default ChildSignUp;