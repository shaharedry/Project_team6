import React, { useEffect, useState } from 'react'; 
import { render } from 'react-dom';
import {TouchableOpacity,View, Text, StyleSheet , Button, ScrollView , ActivityIndicator , FlatList, Alert ,setState, CheckBox} from 'react-native';
import colors from '../../constants/Colors'
import firebase ,{db} from '../../firebase/fire'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Checkbox, List } from 'react-native-paper';
import { ListItem } from 'react-native-elements'
import Navigation from '../../navigation/Navigation'
import AsyncStorage from '@react-native-async-storage/async-storage';


class WatchTasks extends React.Component {
    constructor(){
        super()
        this.state={
            StudentsName:null,
            TeacherEmail:null,
            MSubject:null,
            MDesc:null,
            MsgTo:[],
            DTF:null,
            TeacherName:null,
            TeacherPhone:null,
            ClassName:[],
            isLoaded:false,
            EntireMsg:[],
            TaskStatus: ['Finished'],
            data:[]
        }
    }



    componentDidMount(){
        let ChildName = null    
        try{
            AsyncStorage.getItem('ChildFullname')
                .then(value => {
                    if(value!= null) {
                        ChildName=value;
                    }
                })
            } catch (error){
                console.warn(error)
        }

        let Temp = this.state.TaskStatus
        let FormatData = []
        for(let i=0;i<Temp.length;i++){
            FormatData.push({
                id:i,
                key:Temp[i],
                checked:false
            }
            )
        }
        this.setState({data: FormatData})
        db.collection('Class').get().then( snapshot =>{
            let teacherName=null;
            snapshot.forEach( doc =>{
                const KEY = Object.keys(doc.data());
                KEY.forEach( (key_id) => {
                    if(key_id=='studentsList'){
                        for(let i=0;i<doc.data().number;i++){
                            const data = doc.data().studentsList[i];
                            const tname = doc.data().ClassTeacher;
                            if(ChildName == data ){
                                teacherName=tname
                            }
                        }
                        this.setState({TeacherName:teacherName})
                    }
                })
            })
        }),
        db.collection('Class').get().then( snapshot =>{
            let classname=[];
            snapshot.forEach( doc =>{
                const KEY = Object.keys(doc.data());
                KEY.forEach( (key_id) => {
                    if(key_id=='ClassName'){
                        if(doc.data().ClassTeacher == this.state.TeacherName){
                            classname.push({
                                name:doc.data().ClassName
                            })
                        }
                        this.setState({ClassName:classname})
                    }
                })
            })
        },
        db.collection('Tasks').get().then( snapshot =>{
            let msub;
            let mdesc;
            let msgto=[];
            let entiremsg=[];
            let datatofinish;
            snapshot.forEach( doc =>{
                const KEY = Object.keys(doc.data());
                KEY.forEach( (key_id) => {
                    if(key_id=='classname'){
                        let j=1;                      
                        for(let i=0;i<this.state.ClassName.length;i++){
                            console.log("should be "+this.state.ClassName[i].name)
                            if(doc.data().classname == this.state.ClassName[i].name){
                                console.log("Class is: "+this.state.ClassName[i].name)
                                msub=doc.data().Subject
                                mdesc=doc.data().description
                                datatofinish=doc.data().dtf
                                entiremsg.push({
                                    id:j,
                                    msgsub:msub,
                                    msgdesc:mdesc,
                                })
                                j=j+1;
                            }
                        }
                        this.setState({EntireMsg:entiremsg})
                        this.setState({MSubject:msub})
                        this.setState({MDesc:mdesc})
                        this.setState({MsgTo:msgto})
                        this.setState({DTF:datatofinish})
                    }
                })
            })
        }),
        this.setState({isLoaded:true})
        )
    }

    renderFinished(){
        if(this.state.isLoaded!=false)
        return this.state.data.map((item,key)=> {
            return(
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" , }} key={key} onPress={()=> 
                {this.onCheckedGrade(item.id)}}>
                    <CheckBox value={item.checked} onChange={()=> {this.checkBox_Test}}/>
                    <Text style={{fontWeight:"bold"}}>{item.key}</Text>
                </TouchableOpacity>  
            )
        })
    }

    onCheckedGrade(id){
        const temp = this.state.data
        const index = temp.findIndex( x => x.id === id)
        temp[index].checked = !temp[index].checked
        this.setState({ data: temp})
    }

    SubmistTask(){
        Alert.alert(
            "Task Submitted!",
            "Task has been succesfully marked as Finished!",
            [
            { text: "OK", onPress: () => this.props.navigation.navigate({routeName: 'ChildProfile'}) }
            ]
        );
    }

    render(){
        if(this.state.isLoaded==true)
        return (
            <View>
                <Text>Task Subject: {(this.state.MSubject)}</Text> 
                <Text>Task Description: {(this.state.MDesc)}</Text>
                <Text>End Task by: {(this.state.DTF)}</Text>
                {this.renderFinished()}
                <Button  
                    title="Submit Task"
                    onPress={()=>{
                        this.SubmistTask();
                    }
                    }/>
            </View>
        ); 
        else{
            return(
                <Text>Nothing Loaded,Please wait!</Text>
            )
        }
    }
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
            
  
export default WatchTasks;