import React, { useEffect, useState } from 'react'; 
import { render } from 'react-dom';
import {View, Text, StyleSheet , Button, FlatList, Alert ,setState} from 'react-native';
import colors from '../../constants/Colors'
import firebase ,{db} from '../../firebase/fire'

class EnterGrades extends React.Component {
    state= {
        students: null
    }

    componentDidMount(){
        console.log('mounted')
        db.collection('Teacher').get().then( snapshot =>{
            const students = []
            snapshot.forEach( doc =>{
                KEY = Object.keys(doc.data());
                console.log("KEYS is :"+KEY);
                KEY.forEach( (key_id) => {
                    if(key_id=='fullname'){
                        const data = doc.data()
                        console.log(data)
                        students.push(data)
                    }
                    else{

                    }
                })
            })
            this.setState({ students: students})
        })
        .catch( error => Alert.alert('Error',error))
    }

    render(){
        return (
            <View style={styles.InputContainer}>
                <Text>Enter Grades2</Text>
                <FlatList 
                data = {this.state.students}
                renderItem ={({item}) =>
                <Text>
                    {`Student name: ${item.fullname}\n`}
                    {`Email is: ${item.email}`}
                </Text>
                }
            />
    
            </View>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        //height: windowHeight /15,
        borderColor: '#acc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    InputContainer: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        //width: windowWidth /1.5,
        //height: windowHeight /15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    },
    row: {
        height: 40, 
        backgroundColor: '#E7E6E1' 
    }

})        
            
export default EnterGrades;