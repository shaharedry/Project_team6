import React from 'react'
import {Button, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Firebase from '../../config/Firebase'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { creatGrade } from '../../actions/Grades'
class ViewGrades extends React.Component
{
    render() {

        return (
            < View style ={ { padding: 50} }>
    
                    < View style ={ { flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'} }>
          
                   
     </ View >
     <Button
                    title="Back To Main"
                    onPress={() => this.props.navigation.navigate('TLooged')}
                />
     < View />

 </ View >
           
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
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
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


export default (ViewGrades)