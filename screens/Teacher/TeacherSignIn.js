import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Button, Alert , TouchableOpacity , Keyboard} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from '../../constants/Colors';
import Input from '../../components/Input';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createParent } from '../../actions/parent';
import Firebase ,{db} from '../../firebase/fire';

const TeacherSignIn = props => {

    const login = () => {
        return async (dispatch, getState) => {
            try {
                const response = await Firebase.auth().signInWithEmailAndPassword(EmailInput, PassInput)
                dispatch(getUser(response.user.uid))
                //sessionStorage.setItem('name',response.user.fullname)
                props.navigation.navigate({routeName: 'TeacherLogin'});
            } catch (e) {
                alert(e)
            }
        }
    }
    
    const getUser = uid => {
        return async (dispatch, getState) => {
            try {
                const user = await db
                    .collection('Parent')

                    .doc(uid)
                    .get()
                } 
            catch (e) 
            {
                alert(e)
            }
        }
    }

    const [EmailInput,setEmail]= useState('Elihu222@gmail.com');

    const EmailHandler = EmailText => {
        setEmail(EmailText.replace(/^(9,12)/))
    }
    
    const [PassInput,setPass]= useState('123123');

    const PassHandler = PassText => {
        setPass(PassText)
    }
    //const { getItem, setItem } = useAsyncStorage('@storage_key');

    const readItemFromStorage = async () => {
      const item = await getItem();
      setValue(item);
    };
  
    const writeItemToStorage = async newValue => {
      await setItem(newValue);
      setValue(newValue);
    };

    return (
        //<TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            <View style={styles.InputContainer}>

                <Text>Parent Sign In Screen</Text>


                <Input 
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={EmailHandler}
                    value={EmailInput}
                />
                <Input 
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Password'
                    keyboardType="visible-password"
                    onChangeText={PassHandler}
                    value={PassInput}
                    secureTextEntry={true}
                />
                <View style={styles.buttoncontainer}>
                    <Button title="Sign In" onPress={() => {
                            console.log('pressed Sign In');
                            db.collection("Teacher").where("email", "==", EmailInput).get().then(function(querySnapshot) {
                                querySnapshot.forEach(function(doc) {
                                // doc.data() is never undefined for query doc snapshots
                                console.log(doc.id, " => ", doc.data());
                                var AllData = doc.data();
                                var AllData = doc.data();
                                var email = doc.data().email;
                                var fullname = doc.data().fullname;
                                var phonenum = doc.data().phonenum;
                                var id = doc.data().id;
                                var Role = doc.data().Role;
                                console.log(AllData)
                                localStorage.setItem('user', JSON.stringify(AllData))
                                console.log(doc)
                                
                                //setItem('name',fullname);
                                /*//AsyncStorage.setItem("name",fullname)
                                //sessionStorage.setItem('name',fullname)
                                const saveUser = async fullname => {
                                    try {
                                      await AsyncStorage.setItem('name', fullname);
                                    } catch (error) {
                                      // Error retrieving data
                                      console.log(error.message);
                                    }
                                  };
                                saveUser();
                                console.log(''+AllData);*/
                                ;
                                },
                                //props.navigation.navigate({routeName: 'TeacherLogin'})
                            )})              
                        }} color={colors.secondery} />
                    <Button title="Sign In as Child" onPress={() => { 
                        console.log('pressed Sign In as Child');
                        db.collection("Teacher").where("email", "==", EmailInput).get().then(function(querySnapshot) {
                                querySnapshot.forEach(function(doc) {
                                // doc.data() is never undefined for query doc snapshots
                                console.log(doc.id, " => ", doc.data());
                                var AllData = doc.data();
                                var email = doc.data().email;
                                var fullname = doc.data().fullname;
                                var phonenum = doc.data().phonenum;
                                var id = doc.data().id;
                                var Role = doc.data().Role;
                                console.log('this is here'+doc.data());
                                console.log('this email'+doc.data().email);
                                console.log('this fullname'+doc.data().fullname);
                                console.log('this phonenum'+doc.data().phonenum);
                                console.log('this id'+doc.data().id);
                                console.log('this Role'+doc.data().Role);
                                //AsyncStorage.setItem('name',fullname)
                                localStorage.setItem('user', doc.data().fullname)
                                localStorage.setItem('email', doc.data().email)
                                //console.log(doc.data())
                                //sessionStorage.setItem('name',fullname)
                                //console.log(''+AllData);
                                //props.navigation.navigate({routeName: 'TeacherLogin'});
                                }
                            )})   
                        props.navigation.navigate({routeName: 'ChildLogin'});
                    }} color={colors.secondery}/>
                </View>
            </View>
        //</TouchableWithoutFeedback>
    );
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
    }
})

export default TeacherSignIn;
