import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import colors from '../constants/Colors'


import FirstScreen from '../screens/FirstScreen'
import TypeSignin from '../screens/TypeSignin';

import ParentLogin from '../screens/Parent/ParentLogin'
import ParentProfile from '../screens/Parent/ParentProfile'
import ParentSignUp from '../screens/Parent/ParentSignUp'
import ParentSignIn from '../screens/Parent/ParentSignIn'

import TeacherLogin from '../screens/Teacher/TeacherLogin'
import TeacherProfile from '../screens/Teacher/TeacherProfile'

import TeacherSignIn from '../screens/Teacher/TeacherSignIn'
import TeacherSignUp from '../screens/Teacher/TeacherSignUp'

import PresenceCorrection from '../screens/Teacher/PresenceCorrection'
import ScoreCorrection from '../screens/Teacher/ScoreCorrection'



import createClass from '../screens/Teacher/createClass'
import ViewPresence from '../screens/Teacher/ViewPresence'
import ViewGrades from '../screens/Teacher/ViewGrades'
import EnterGrades from  '../screens/Teacher/EnterGrades'
import SubtractionConfirmation from '../screens/Teacher/SubtractionConfirmation'

import EnterPresence from  '../screens/Teacher/EnterPresence'
import WatchGrades from '../screens/Child/WatchGrades'
import WatchPresence from '../screens/Child/WatchPresence'

import ChildLogin from '../screens/Child/ChildLogin'
import ChildProfile from '../screens/Child/ChildProfile'
import ChildSignUp from '../screens/Child/ChildSignUp'
import SchoolDetails from '../screens/Child/SchoolDetails'
import Signup from '../screens/Signup';








//import ParentSignUp from '../screens/Parent/ParentSignUp' //Invariant Violation
//import ParentSignIn from '../screens/Parent/ParentSignIn' //Invariant Violation


const AppNavigator = createStackNavigator({
    FirstScreen:{ screen: FirstScreen ,headerTitle: 'Schovid'},
    TypeSignin:{ screen: TypeSignin ,headerTitle: 'Schovid',},
    Signup:{screen: Signup ,headerTitle: 'Schovid',},
    ParentSignUp:{ screen:  ParentSignUp ,headerTitle: 'Schovid'},
    ParentLogin:{ screen:  ParentLogin ,headerTitle: 'Schovid'},
    ParentProfile:{ screen:  ParentProfile ,headerTitle: 'Schovid'},
    ParentSignIn: {screen:  ParentSignIn ,headerTitle: 'Schovid'},

   
    TeacherSignIn:{ screen:  TeacherSignIn ,headerTitle: 'Schovid'},
    TeacherSignUp:{ screen:  TeacherSignUp ,headerTitle: 'Schovid'},
    TeacherLogin:{ screen:  TeacherLogin ,headerTitle: 'Schovid'},
    TeacherProfile:{ screen:  TeacherProfile ,headerTitle: 'Schovid'},
    EnterGrades:{ screen:  EnterGrades ,headerTitle: 'Schovid'},
    EnterPresence:{ screen: EnterPresence ,headerTitle: 'Schovid'},
    ScoreCorrection:{ screen: ScoreCorrection ,headerTitle: 'Schovid'},
    ViewGrades:{ screen: ViewGrades ,headerTitle: 'Schovid'},
    ViewPresence :{screen:ViewPresence,headerTitle: 'Schovid'},
    createClass :{screen:createClass,headerTitle:'Schovid'},
    SubtractionConfirmation :{screen:SubtractionConfirmation,headerTitle:'Schovid'},
    PresenceCorrection:{ screen:  PresenceCorrection ,headerTitle: 'Schovid'},

    ChildSignUp:{ screen:  ChildSignUp ,headerTitle: 'Schovid'},
    ChildLogin:{ screen:  ChildLogin ,headerTitle: 'Schovid'},
    ChildProfile:{ screen:  ChildProfile ,headerTitle: 'Schovid'},
    WatchGrades:{ screen:  WatchGrades ,headerTitle: 'Schovid'},
    SchoolDetails:{screen: SchoolDetails,headerTitle:'Schovid'},

    WatchPresence:{ screen:  WatchPresence ,headerTitle: 'Schovid'},

    Signup:{ screen:  Signup ,headerTitle: 'Schovid'}

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