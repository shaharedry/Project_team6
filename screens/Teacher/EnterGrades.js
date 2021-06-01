import React, { useEffect, useState } from 'react'; 
import { render } from 'react-dom';
import {TouchableOpacity,View, Text, StyleSheet , Button, ScrollView , ActivityIndicator , FlatList, Alert ,setState, CheckBox} from 'react-native';
import colors from '../../constants/Colors'
import firebase ,{db} from '../../firebase/fire'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Checkbox, List } from 'react-native-paper';
import { ListItem } from 'react-native-elements'

class EnterGrades extends React.Component {
    state= {
        students: null,
        isLoaded: false,
        checked: false
    }
   
    // getStudentsOnQeueu = async () => {
    //     let students = await this.studentsRef.orderByChild("fullname")
    //     return students
    //   }
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
            //getStudentsOnQeueu();
        })
        .catch( error => Alert.alert('Error',error.message))
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

    clickEventListener(item) {
        Alert.alert(item.fullname, item.email)
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

            // <View>
            //     {this.state.students.map((item,index) =>(
            //         <ListItem key={index}>
            //             <Checkbox
            //                 style={{marginRight: 30}}
            //                 checked={this.state.deletionArray.includes(index)}
            //                 />
            //                 <body>
            //                     <Text>{item.fullname}</Text>
            //                 </body>
            //         </ListItem>
            //     ))}
            // </View>
        <View style={styles.container}>
            <FlatList style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={this.state.students}
                horizontal={false}
                numColumns={2}
                keyExtractor= {(item) => {
                return item.fullname;
            }}
            renderItem={({item}) => {
                return (
                <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                    <View style={styles.cardFooter}>
                        <View style={{alignItems:"center", justifyContent:"center"}}>
                            <Text style={styles.name}>{item.fullname}</Text>
                            <Text style={styles.position}>{item.email}</Text>
                            <TouchableOpacity style={styles.UpdateButton} onPress={()=> this.clickEventListener(item)}>
                                <Text style={styles.UpdateButtonText}>Enter Grades</Text>  
                            </TouchableOpacity>
                        </View>
                    </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
      
        
    }

//     const [ClassInput,setClass]= useState('');
//     const ClassHandler = ClassText => {
//         setClass(ClassText.replace(/^[0-9](1,1)/))
//     }
//     const [lessonInput,setlesson]= useState('');
//     const lessonHandler = lessonText => {
//         setlesson(lessonText.replace(/[^A-Za-z]/))
//     }
//     const [gradeInput,setgrade]= useState('');
//     const gradeHandler = gradeText => {
//         setgrade(gradeText.replace(/^[0-9](2,1)/))
//     }

// return(
//     <View style={styles.InputContainer}>
//                 <Text>Enter Grade</Text>
//                 <Input
//                     style={styles.inputField}
//                     blurOnSubmit
//                     autoCorrect={false}
//                     placeholder='Full Name'
//                     keyboardType="ascii-capable"
//                     onChangeText={FullnameHandler}
//                     value={FullnameInput}
//                 />
//                 <Input
//                     style={styles.inputField}
//                     blurOnSubmit
//                     autoCorrect={false}
//                     placeholder='ID'
//                     keyboardType="ascii-capable"
//                     onChangeText={IDHandler}
//                     value={IDInput}
//                 />
//                 <Input 
//                     style={styles.inputField}
//                     blurOnSubmit
//                     autoCorrect={false}
//                     placeholder='Class'
//                     keyboardType="Phone"
//                     onChangeText={ClassHandler}
//                     value={ClassInput}
//                 />
//                 <Input 
//                     style={styles.inputField}
//                     blurOnSubmit
//                     autoCorrect={false}
//                     placeholder='lesson'
//                     keyboardType="ascii-capable"
//                     onChangeText={lessonHandler}
//                     value={lessonInput}
//                 />
//                 <Input 
//                     style={styles.inputField}
//                     blurOnSubmit
//                     autoCorrect={false}
//                     placeholder='Grade'
//                     keyboardType="ascii-Phone"
//                     onChangeText={gradeHandler}
//                     value={gradeInput}
                    
//                 />
                
//                 <View style={styles.buttoncontainer}>
//                         <Button title="Enter" onPress={() => {
                            
//                             signup();
//                         }} color={colors.secondery} />
//                 </View>
//             </View>
//)
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
                    fontSize: 16,
                    borderRadius: 8,
                    borderWidth: 1
                },
                container: {
                    flex: 1,
                    paddingBottom: 22
                },
                preloader: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                UpdateButton: {
                    marginTop:10,
                    height:45,
                    width:150,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:30,
                    backgroundColor: "#00BFFF",
                  },
                UpdateButtonText:{
                    color: "#FFFFFF",
                    fontSize:18,
                  },
                  card:{
                    shadowColor: '#00000021',
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                
                    marginVertical: 5,
                    backgroundColor:"white",
                    flexBasis: '46%',
                    marginHorizontal: 5,
                  },
                  cardFooter: {
                    paddingVertical: 17,
                    paddingHorizontal: 16,
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1,
                    flexDirection: 'row',
                    alignItems:"center", 
                    justifyContent:"center"
                  },
                  list: {
                    paddingHorizontal: 5,
                    backgroundColor:"#E6E6E6",
                  },
                  listContainer:{
                   alignItems:'center'
                  },
                  name:{
                    fontSize:18,
                    flex:1,
                    alignSelf:'center',
                    color:"#008080",
                    fontWeight:'bold'
                  },
                  position:{
                    fontSize:14,
                    flex:1,
                    alignSelf:'center',
                    color:"#696969"
                  }
                  
            })
            
            
        
export default EnterGrades;