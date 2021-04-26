import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import colors from '../../constants/Colors'

const TeacherProfile = props => {
    return (
        <View style={styles.screen}>
            <Text>Teacher Profile Screen</Text>
            <View style={styles.ImageContainer}>
                <Image
                    source={require('../../assets/images/TeacherIcon.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                    />
            </View>
                <Button
                    title="Enter Grades"
                    onPress={() => props.navigation.navigate({routeName:'EnterGrades'})}
                />
        
                <Button
                    title="Enter presence"
                    onPress={() => props.navigation.navigate({routeName:'EnterPresence'})}
                />
        </View>
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default TeacherProfile;