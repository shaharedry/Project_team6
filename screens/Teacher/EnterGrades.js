
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet , Button, FlatList } from 'react-native';
import colors from '../../constants/Colors'
import firebase ,{db} from '../../firebase/fire'


const EnterGrades = props => {

    let NumOfUsers = []

    const [sizeof,setsizeof]=useState(0);

    useEffect(() => {
        //const Ref = firebase.reference.child("Teacher").orderByChild("fullname");
        const ref = db.collection("Teacher").where("email", "!=", 'NULL')
        db.collection("Teacher").where("email", "!=", 'NULL').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            //ref.on('child_added', snapshot => {
                // NumOfUsers.push({
                //     fullname: doc.data().fullname,
                //     //name: doc.data().grade
                //     })
                let DATA = [];
                if(doc != 'NULL' ){
                    let tmp = [];
                    KEY = Object.keys(doc.data());
                    console.log("KEYS is :"+KEY);
                    KEY.forEach( (key_id) => {
                    let a = doc.data()[key_id];
                    a.key = key_id;
                    if(key_id=='fullname'){
                        tmp.push(a);
                        setsizeof(NumOfUsers.length);
                    }

        })
                console.log(doc.data());
                console.log("Length of array is: "+NumOfUsers.length);
            }
        })

    })
    })

    return (
        <View style={styles.InputContainer}>
            <Text>Enter Grades</Text>
            <Text>Size of array is : {sizeof}</Text>  
        </View>
    )
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
            
            
export default EnterGrades;