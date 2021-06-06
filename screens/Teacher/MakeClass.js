import React, { useCallback, useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet ,Button, Alert , TouchableOpacity , Keyboard} from 'react-native';
import colors from '../../constants/Colors';
import Input from '../../components/Input';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createGrade } from '../../actions/Grades';
import Firebase ,{db} from '../../firebase/fire';

const MakeClass = props => {
    const [user, setUser] = useState()

    useEffect(() => {
        _retrieveData();
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
                        console.log('name is:'+doc.data().fullname)
                        //names.push(doc.data().fullname)
                    }
<<<<<<< Updated upstream
                    else{
=======
                    if(students==null){
                        this.props.navigation.navigate({routeName: 'TeacherProfile'});
                        Alert.alert("Error!","All students are assigned to classes!")
                        Alert.alert(
                            "Error!",
                            "All students are already assigned to classes!",
                            [
                            { text: "OK", onPress: () => this.props.navigation.navigate({routeName: 'TeacherProfile'}) }
                            ]
                        );
>>>>>>> Stashed changes

                    }
                })
            })
            this.setState({ students: students})
            this.setState({isLoaded:true})
        })
        .catch( error => Alert.alert('Error',error.message))
    }, []); 

    state= {
        students: null,
        isLoaded: false,
        checked: false
    }
   
    // getStudentsOnQeueu = async () => {
    //     let students = await this.studentsRef.orderByChild("fullname")
    //     return students
    //   }
    

    _retrieveData= async () => {
        try{
            AsyncStorage.getItem('TeacherFullname')
                .then(value => {
                    if(value!= null) {
                        setUser(value)
                    }
                })
        } catch (error){
            console.warn(error)
        }
    } 

    const signup = async() =>{ 
        try{
<<<<<<< Updated upstream
            const response = await Firebase.auth().signInWithEmailAndPassword(Email, Pass)
=======
            const nameofclass=this.CheckClassName();
            console.log("nameofclass: "+nameofclass)
            var keys = this.state.students.map((t) => t.fullname)
            const checks = this.state.students.map((t) => t.checked)
            let selected = [] 
            for (let i=0;i<checks.length; i++){
                if(checks[i] == true ){
                    selected.push(keys[i])
                }
            }
            const Teacher = this.state.user;
            console.log(Teacher)
            //console.log("Teacher name : "+Teacher)
            //console.log("User is: " + this.state.user)
            //console.log("Students to update: "+selected)
            const response = await firebase.auth().signInWithEmailAndPassword('HarelElihu@gmail.com', '123123')
>>>>>>> Stashed changes
            if (response.user.uid) {
                const Class = {
                    fullname: FullnameInput,
                    number:numberInput,
                    students:studentsInput,    
                }
                db.collection('Classes')
                    .doc(FullnameInput)
                    .set(Class)

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

    const [numberInput,setnumber]= useState('');
    const numberHandler = numberText => {
        setnumber(numberText.replace(/^[0-9](1,2)/))
    }
    const [studentsInput,setstudents]= useState('');
    const studentsHandler = studentsText => {
        setstudents(studentsText.replace(/[^A-Za-z]+[^A-Za-z]+[0-9](0,9)/))
    }
    

return(
    <View style={styles.InputContainer}>
                <Text>Hello ({user}), Make a new class</Text>
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
                    placeholder='number of students'
                    keyboardType="Phone"
                    onChangeText={numberHandler}
                    value={numberInput}
                />
                <Input 
                    style={styles.inputField}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder='Student names'
                    keyboardType="ascii-capable"
                    onChangeText={studentsHandler}
                    value={studentsInput}
                />
                
                <View style={styles.buttoncontainer}>
                        <Button title="Enter" onPress={() => {
                            signup();
                        }} color={colors.secondery} />
                </View>
            </View>
)
            //<TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
}
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
            
            
export default MakeClass;