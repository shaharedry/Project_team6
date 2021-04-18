import React from 'react'
import {Button, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Firebase from '../../config/Firebase'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from '../../actions/Teacher'

class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }


    handleSignUp = () => {
        this.props.signup();
        this.props.navigation.navigate('TLogged')
    }

    render() {
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
                    value={this.props.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.props.password}
                    onChangeText={password => this.props.updatePassword(password)}
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
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
                <Button
                    title="Have an account? Login as Teacher"
                    onPress={() => this.props.navigation.navigate('TLogin')}
                />
                <Button
                    title="Back To Main"
                    onPress={() => this.props.navigation.navigate('FirstScreen')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.Techer
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)