import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import colors from '../constants/Colors'

import Firstscreen from '../screens/FirstScreen';
import TypeSignin from '../screens/TypeSignin';
import Signup from '../screens/Signup';

import ParentLogin from '../screens/Parent/ParentLogin'
import ParentProfile from '../screens/Parent/ParentProfile'


import TeacherLogin from '../screens/Teacher/TeacherLogin'
import TeacherProfile from '../screens/Teacher/TeacherProfile'
import TeacherSignIn from '../screens/Teacher/TeacherSignIn'



import EnterPresence from  '../screens/Teacher/EnterPresence'
import WatchGrades from '../screens/Child/WatchGrades'
import WatchPresence from '../screens/Child/WatchPresence'

import ChildLogin from '../screens/Child/ChildLogin'
import ChildProfile from '../screens/Child/ChildProfile'
import ChildSignUp from '../screens/Child/ChildSignUp' //Invariant Violation


//import ParentSignUp from '../screens/Parent/ParentSignUp' //Invariant Violation
import ParentSignIn from '../screens/Parent/ParentSignIn' //Invariant Violation

import TeacherSignUp from '../screens/Teacher/TeacherSignUp' //Invariant Violation
import EnterGrades from  '../screens/Teacher/EnterGrades'

const AppNavigator = createStackNavigator({
    Firstscreen:{ screen: Firstscreen ,headerTitle: 'Schovid'},
    TypeSignin:{ screen: TypeSignin ,headerTitle: 'Schovid',},
    Signup:{screen: Signup ,headerTitle: 'Schovid',},
    //ParentSignUp:{ screen:  ParentSignUp ,headerTitle: 'Schovid'},
    ParentLogin:{ screen:  ParentLogin ,headerTitle: 'Schovid'},
    ParentProfile:{ screen:  ParentProfile ,headerTitle: 'Schovid'},
    ParentSignIn: {screen:  ParentSignIn ,headerTitle: 'Schovid'},
    
    TeacherSignIn:{ screen:  TeacherSignIn ,headerTitle: 'Schovid'},
    TeacherSignUp:{ screen:  TeacherSignUp ,headerTitle: 'Schovid'},
    TeacherLogin:{ screen:  TeacherLogin ,headerTitle: 'Schovid'},
    TeacherProfile:{ screen:  TeacherProfile ,headerTitle: 'Schovid'},
    EnterGrades:{ screen:  EnterGrades ,headerTitle: 'Schovid'},
    EnterPresence:{ screen: EnterPresence ,headerTitle: 'Schovid'},


    ChildSignUp:{ screen:  ChildSignUp ,headerTitle: 'Schovid'},
    ChildLogin:{ screen:  ChildLogin ,headerTitle: 'Schovid'},
    ChildProfile:{ screen:  ChildProfile ,headerTitle: 'Schovid'},
    WatchGrades:{ screen:  WatchGrades ,headerTitle: 'Schovid'},
    WatchPresence:{ screen:  WatchPresence ,headerTitle: 'Schovid'}

},
{
    defaultNavigationOptions : {
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: colors.title
    }
}
);

export default createAppContainer(AppNavigator);