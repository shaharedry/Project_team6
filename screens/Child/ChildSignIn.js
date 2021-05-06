import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Button, Alert , TouchableOpacity , Keyboard} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from '../../constants/Colors';
import Input from '../../components/Input';
import { FlingGestureHandler, TouchableWithoutFeedback } from 'react-native-gesture-handler';;
import Firebase ,{db} from '../../firebase/fire';

const ChildSignIn = props => {

    const login = () => {
        return async (dispatch, getState) => {
            try {
                const response = await Firebase.auth().signInWithEmailAndPassword(EmailInput, PassInput)
                dispatch(getUser(response.user.uid))
                //sessionStorage.setItem('name',response.user.fullname)
                props.navigation.navigate({routeName: 'ChildLogin'});
            } catch (e) {
                alert(e)
            }
        }
    }
    
    const getUser = uid => {
        return async (dispatch, getState) => {
            try {
                const user = await db
                    .collection('Child')
                    .doc(uid)
                    .get()
                } 
            catch (e) 
            {
                alert(e)
            }
        }
    }

    const [EmailInput,setEmail]= useState('');

    const EmailHandler = EmailText => {
        setEmail(EmailText.replace(/^(9,12)/))
    }
    
    const [PassInput,setPass]= useState('');

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
                <Text>Child Sign In Screen</Text>

                <Input 
                    testID={'email'}
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={EmailHandler}
                    value={EmailInput}
                />
                <Input 
                    testID={'password'}
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
                            db.collection("Child").where("email", "==", EmailInput).get().then(function(querySnapshot) {
                                querySnapshot.forEach(function(doc) {
                                localStorage.setItem('user',doc.data().fullname);
                                },
                                props.navigation.navigate({routeName: 'TeacherLogin'})
                            )})              
                        }} color={colors.secondery} />
                    <Button title="Sign In as Child" onPress={() => { 
                        console.log('pressed Sign In as Child');
                        db.collection("Child").where("email", "==", EmailInput).get().then(function(querySnapshot) {
                                querySnapshot.forEach(function(doc) {
                                localStorage.setItem('user', doc.data().fullname)
                                localStorage.setItem('email', doc.data().email)
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
