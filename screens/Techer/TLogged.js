import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../../config/Firebase'

class Profile extends React.Component {
    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('TLogin')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
                <Text>{this.props.user.email}</Text>
                <Button
                    title="Enter Grades"
                    onPress={() => this.props.navigation.navigate('EnterGrades')}
                />
                
                <Button
                    title="Enter presence"
                    onPress={() => this.props.navigation.navigate('EnterPresence')}
                />
                
                <Button title='Logout' onPress={this.handleSignout} />
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
    }
}) 

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)