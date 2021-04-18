import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';

class EnterGrades extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Enter Grades</Text>
                <Button
                    title="Back To Main"
                    onPress={() => this.props.navigation.navigate('TLogged')}
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

export default (EnterGrades)