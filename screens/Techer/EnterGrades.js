import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';


class EnterGrades extends React.Component {
    render(){
      return(
        <View style={styles.screen}>
            <View style={styles.buttonContainer}>
            <TextInput
                    style={styles.inputBox}
                    value={this.props.user.Student}
                    onChangeText={StudentName => this.props.updateEmail(StudentName)}
                    placeholder='Student name'
                    autoCapitalize='none'
                />
                <Button title="Choose a student"
                 onPress={() => {this.props.navigation.navigate('')}} color='#1e90ff'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Choose a course" 
                onPress={() => {this.props.navigation.navigate('')}} color='#1e90ff'/>
                <TextInput
                    style={styles.inputBox}
                    value={this.props.course}
                    onChangeText={StudentName => this.props.updateEmail(StudentName)}
                    placeholder='Student name'
                    autoCapitalize='none'
                />
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
});

export default (EnterGrades)