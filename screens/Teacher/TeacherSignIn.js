import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Button, Alert , TouchableOpacity , Keyboard} from 'react-native';
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

                console.log('got here?');

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

    const [EmailInput,setEmail]= useState('');

    const EmailHandler = EmailText => {
        setEmail(EmailText.replace(/^(9,12)/))
    }
    
    const [PassInput,setPass]= useState('');

    const PassHandler = PassText => {
        setPass(PassText)
    }


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
                            login();
                            console.log('');
                            console.log('');

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

export default TeacherSignIn;