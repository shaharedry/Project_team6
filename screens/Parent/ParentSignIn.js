import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Button, Alert , TouchableOpacity , Keyboard} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import colors from '../../constants/Colors';
import Input from '../../components/Input';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createParent } from '../../actions/Parent';
import Firebase ,{db} from '../../firebase/fire';
//import 'localstorage-polyfill';
import Navigation from '../../navigation/Navigation';


const ParentSignIn = props => {

    const [email,setEmail]= useState('harelelihu@gmail.com');

    const EmailHandler = EmailText => {
        setEmail(EmailText.replace(/^[0-9](9,12)/))
    }
    
    const [password,setPass]= useState('123123');

    const PassHandler = PassText => {
        setPass(PassText)
    }

    const [verify,setverify]=useState(false);


    return (
        //<TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            <View style={styles.InputContainer}>
                <Text>Parent Sign In Screen</Text>

                <Input 
                    testID={'email'}
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={EmailHandler}
                    value={email}
                />
                <Input 
                    testID={'password'}
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Password'
                    keyboardType="visible-password"
                    onChangeText={PassHandler}
                    value={password}
                    secureTextEntry={true}
                />
                <View style={styles.buttoncontainer}>
                        <Button title="Sign In" onPress={() => {
                            console.log("wtf went wrong?");
                            Firebase.auth().signInWithEmailAndPassword(email, password)
                            .then((userCredential) => {
                                // Signed in
                                var user = userCredential.user;
                                console.log("wtf went wrong?"+user);
                                (user) => {
                                    if (user){
                                      console.log(user.uid);
                                    }
                                }
                                props.navigation.navigate({routeName:'ParentProfile'})
                                Firebase.auth().getUser(uid).then((userRecord) => {
                                    // See the UserRecord reference doc for the contents of userRecord.

                                    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);

                                })
                                props.navigation.navigate({routeName: 'ParentLogin'});
                                // ...
                                })
                            .catch((error) => {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                });
                        }} color={colors.secondery} />
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



export const login = (email,password) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("wtf went wrong?")
      setverify=true;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}


export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()

            dispatch({ type: LOGIN, payload: user.data() })
        } catch (e) {
            alert(e)
        }
    }
}


export default ParentSignIn;