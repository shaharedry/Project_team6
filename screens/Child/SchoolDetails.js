import React ,{useState} from 'react'
import {View ,Alert , Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Card from '../../components/Card';


const SchoolDetails = props => {

    return(
            <View style={styles.screen}>
                {/*<Text style={styles.title}>Welcome</Text>*/}
                <Card style={styles.inputcontainer}>
                    <Text style={styles.title}>School name: Ben-Gurion</Text>
                </Card>
            </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    buttoncontainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 90,
        paddingBottom: 35,
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 30
    },
    inputcontainer:{
        width: 400,
        maxWidth: '80%',
        alignItems: 'center',
    }, 
    input: {
        width:50,
        textAlign:'center'
    }

});

export default SchoolDetails;