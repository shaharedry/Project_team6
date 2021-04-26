import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Button, Alert , TouchableOpacity , Keyboard} from 'react-native';
import colors from '../../constants/Colors';
import Input from '../../components/Input';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createParent } from '../../actions/Parent';
import  AuthContext  from '../../navigation/AuthProvider';
import Firebase ,{db} from '../../firebase/fire';

const ParentSignUp = props => {

    /*const [validFname,setValidFname] = useState(false);
    const [validLname,setValidLname] = useState(false);
    const [validEmail,setValidEmail] = useState(false);
    const [validPhone,setValidPhone] = useState(false);
    const [validPass,setValidPass] = useState(false);
    const [validID,setValidID] = useState(false); 

    const [enteredInput, setenteredInput] = useState('');

    const InputHandler = inputText => {
        setenteredInput(inputText.replace(/^[A-Za-z]/));
    }; */

    const signup = async() =>{
        try{
            const response = await Firebase.auth().createUserWithEmailAndPassword(EmailInput, PassInput)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: EmailInput,
                    fullname: FullnameInput,
                    phonenum: PhoneInput,
                    id:IDInput,
                    Role: 'Parent', 
                    Children: child
                   
                }
                db.collection('Parent')
                    .doc(response.user.uid)
                    .set(user)

                props.navigation.navigate({routeName: 'ParentLogin'});
            }
        } catch (e){
            console.log(e);
            alert(e);
        }
    }

    const [FullnameInput,setFname]= useState('');

    const FullnameHandler = FullnameText => {
        setFname(FullnameText.replace(/[^A-Za-z]+[^A-Za-z]/))
    }

    const [EmailInput,setEmail]= useState('');

    const EmailHandler = EmailText => {
        setEmail(EmailText.replace(/^[0-9](9,12)/))
    }

    const [PhoneInput,setPhone]= useState('0502606484');

    const PhoneHandler = PhoneText => {
        setPhone(PhoneText.replace(/^[0-9](9,12)/))
    }
    
    const [PassInput,setPass]= useState('123123');

    const PassHandler = PassText => {
        setPass(PassText)
    }

    const [IDInput,setID]= useState('205521776');

    const IDHandler = IDText => {
        setID(IDText.replace(/^[0-9](9,9)/))
    }
    
    const [VerifyPass, setVerifyPass] = useState ('123123');

    const VerifyHandler = VerifyPassText =>{
        setVerifyPass(VerifyPassText)
    }

    const resetinputHandler =() =>{
        setenteredInput=('');
    }

    const submitHandler = useCallback(() =>{
        console.log("Submit!");
    },[]);


    return (
        //<TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            <View style={styles.InputContainer}>
                <Text>Parent Sign Up Screen</Text>
                <Input
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Full Name'
                    keyboardType="ascii-capable"
                    onChangeText={FullnameHandler}
                    value={FullnameInput}
                />
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
                    placeholder='Phone'
                    keyboardType="phone-pad"
                    onChangeText={PhoneHandler}
                    value={PhoneInput}
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
                <Input 
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Verify Password'
                    keyboardType="visible-password"
                    onChangeText={VerifyHandler}
                    value={VerifyPass}
                    secureTextEntry={true}
                />
                <Input
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='ID number'
                    keyboardType="number-pad"
                    onChangeText={IDHandler}
                    value={IDInput}
                />
                <View style={styles.buttoncontainer}>
                        <Button title="Sign Up" onPress={() => {
                            if(PassInput!=''){
                                if(VerifyPass==PassInput){
                                    submitHandler();
                                    signup();
                                }
                                else{
                                    Alert.alert(
                                        'Error',
                                        'Passwords do no match!',
                                        [
                                          {text: 'OK'}
                                        ],
                                        {cancelable: false},
                                      );
                                      console.log(VerifyPass);
                                }
                            }
                            else{
                                Alert.alert(
                                    'Error',
                                    'Please enter a Password',
                                    [
                                      {text: 'OK'}
                                    ],
                                    {cancelable: false},
                                  );
                                  console.log(VerifyPass);
                            }
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

export default ParentSignUp;