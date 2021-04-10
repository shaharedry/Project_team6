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
                <Text>Enter Grades</Text>
                
                <Button
                    title="Enter Grades"
                    onPress={() => this.props.navigation.navigate('EnterGrades')}
                />

                <Text>Enter presence</Text>
                
                <Button
                    title="Enter presence"
                    onPress={() => this.props.navigation.navigate('EnterPresence')}
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
    }
}) 

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)