import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Button, Alert , TouchableOpacity , Keyboard} from 'react-native';
import colors from '../../constants/Colors';
import Input from '../../components/Input';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createGrade } from '../../actions/Grades';
import Firebase ,{db} from '../../firebase/fire';
import email from 'react-native-email'




const EnterGrades = props => {
    const signup = async() =>{ 
        try{
            const response = await Firebase.auth().signInWithEmailAndPassword(Email, Pass)
            if (response.user.uid) {
                const Grade = {
                   
                    fullname: FullnameInput,

                    class:ClassInput,
                    

                    lesson:lessonInput,

                   
                    Grade: gradeInput
                   
                }
                db.collection('Grades')
                    .doc(FullnameInput)
                    .set(Grade)

                props.navigation.navigate({routeName: 'TeacherProfile'});
            }

        } catch (e){
            console.log(e);
            alert(e);
        }
    }

    const [Email,setEmail]= useState('Elihu222@gmail.com');
    
    const [Pass,setPass]= useState('123123');

    const [FullnameInput,setFname]= useState('');

    const FullnameHandler = FullnameText => {
        setFname(FullnameText.replace(/[^A-Za-z]+[^A-Za-z]/))
    }

    const [ClassInput,setClass]= useState('');
    const ClassHandler = ClassText => {
        setClass(ClassText.replace(/^[0-9](1,1)/))
    }
    const [lessonInput,setlesson]= useState('');
    const lessonHandler = lessonText => {
        setlesson(lessonText.replace(/[^A-Za-z]/))
    }
    const [gradeInput,setgrade]= useState('');
    const gradeHandler = gradeText => {
        setgrade(gradeText.replace(/^[0-9](1,2)/))
    }

    handleEmail = () => {
        const to = ['shalevgabay60@gmail.com', 'shahared1907@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['shalevgabay60@gmail.com', 'shahared1907@gmail.com'], // string or array of email addresses
            bcc: 'shalevgabay60@gmail.com', // string or array of email addresses
            subject: 'Grades Student - Shalev Gabay',
            body: 'The Grade is 100!!!!!'
        }).catch(console.error)
    } 

  

return(
    <View style={styles.InputContainer}>

                <Text>Enter Grades</Text>
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
                    placeholder='Class'
                    keyboardType="Phone"
                    onChangeText={ClassHandler}
                    value={ClassInput}
                />
                <Input 
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='lesson'
                    keyboardType="ascii-capable"
                    onChangeText={lessonHandler}
                    value={lessonInput}
                />
                <Input 
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='grade'
                    keyboardType="Phone"
                    onChangeText={gradeHandler}
                    value={gradeInput}
                    
                />


                
                <View style={styles.buttoncontainer}>
                        <Button title="Enter" onPress={() => {
                            signup();
                        }} color={colors.secondery} />
                </View>

                <View style={styles.buttoncontainer}>
                        <Button title="Send Email" onPress={() => {
                            handleEmail();
                        }} color={colors.secondery} />
                </View>

            </View>

            
)
            //<TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
}




            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center'
                },

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
            
            
export default EnterGrades;