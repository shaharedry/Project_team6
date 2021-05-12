import React, { useEffect, useState } from 'react'; 
import { render } from 'react-dom';
import {TouchableOpacity,View, Text, StyleSheet , Button, ListItem, FlatList, Alert ,setState, CheckBox} from 'react-native';
import colors from '../../constants/Colors'
import firebase ,{db} from '../../firebase/fire'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Checkbox, List } from 'react-native-paper';

class EnterGrades extends React.Component {
    state= {
        students: null,
        isLoaded: false,
        checked: false
    }
   
    getStudentsOnQeueu = async () => {
        let students = await this.studentsRef.orderByChild("fullname")
        return students
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
                        console.log('name is:'+doc.data().fullname)
                        //names.push(doc.data().fullname)
                    }
                    else{

                    }
                })
            })
            this.setState({ students: students})
            this.setState({isLoaded:true})
            getStudentsOnQeueu();
        })
        .catch( error => Alert.alert('Error',error))
    }
    renderStudentList(){
        if(this.state.isLoaded!=false)
        return this.state.students.map((item,key)=> {
            return(
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center" }} key={key} onPress={()=> {this.value=!this.value}}>
                    <CheckBox value={false}/>
                    <Text style={{fontWeight:"bold"}}>{item.fullname}</Text>
                </TouchableOpacity>
                // <View>
                //     <CheckBox
                //         value={this.state.checked}
                //         onValueChange={() => this.setState({ checked: !this.state.checked })}
                //         />
                //     <Text>{item.fullname}</Text>
                // </View>
            )
        })
    }

    onChecked(id){
        const data = this.state.students
        const index = data.findIndex(x => x.id === id);
        console.log('id is '+ id)
        console.log('index is '+index)
        const isInList = false;
        const checked = []
        if(checked.length > 0){
            console.log('checked length wasnt 0')
            for(let i=0;i<checked.length;i++){
                //console.log('checked list is:'+checked[i])
                if(checked[i]==data[index])
                    isInList = true;
            }
            if(isInList== false)
                checked.push(data[index]);
        }
        else{
            console.log('checked length was 0')
            console.log('data is' + data[index])
            checked.push(data[index]);
        }
        this.setState({ checked: checked})
        
    }

    // getSelectedStudents(){
    //     var keys = this.state.students.map((t) => t.key)
    //     const checks = this.state.students.map((t) => t.checked)
    //     let selected = [] 
    //     for (let i=0;i<checks.length; i++){
    //         if(checks[i] == true ){
    //             selected.push(keys[i])
    //         }
    //     }
    //     console.log(selected)
    // }

    render(){
        return (
            // <View style={styles.InputContainer}>
            //     <Text>Enter Grades</Text>
            //     <FlatList 
            //     data = {this.state.students}
            //     renderItem ={({item}) =>
            //         // <RadioButton
            //         //     value ={item.fullname}
            //         //     onPress={() => this.checked=value}
            //         // />
            //     <Text>
            //         {`Student name: ${item.fullname}\n`}
            //         {`Email is: ${item.email}`}
            //     </Text>
            //     }
            //     />
            //     <RadioForm
            //         radio_props={this.dataList}
                    
            //         onPress={(value) => {this.setState({value:value})}}
            //     />
            // {this.renderStudentList()}
            // {/* <Button
            //         title="Update Students "
            //         onPress={() => {
            //         {this.getSelectedStudents}}
            //         }
            //     /> */}
            // </View>
            <View>
                {this.state.students.map((item,index) =>(
                    <ListItem key={index}>
                        <Checkbox
                            style={{marginRight: 30}}
                            checked={this.state.deletionArray.includes(index)}
                            />
                            <body>
                                <Text>{item.fullname}</Text>
                            </body>
                    </ListItem>
                ))}
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