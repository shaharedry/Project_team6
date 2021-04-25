import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import colors from '../constants/colors'

import FirstScreen from '../Screens/FirstScreen'
import TypeSignin from '../Screens/TypeSignin';

import ParentLogin from '../Screens/Parent/ParentLogin'
import ParentProfile from '../Screens/Parent/ParentProfile'
import ParentSignUp from '../Screens/Parent/ParentSignUp'
import ParentSignIn from '../Screens/Parent/ParentSignIn'

import TeacherLogin from '../Screens/Teacher/TeacherLogin'
import TeacherProfile from '../Screens/Teacher/TeacherProfile'
import TeacherSignUp from '../Screens/Teacher/TeacherSignUp'

import EnterGrades from  '../Screens/Teacher/EnterGrades'
import EnterPresence from  '../Screens/Teacher/EnterPresence'
import WatchGrades from '../Screens/Child/WatchGrades'
import WatchPresence from '../Screens/Child/WatchPresence'

import ChildLogin from '../Screens/Child/ChildLogin'
import ChildProfile from '../Screens/Child/ChildProfile'
import ChildSignUp from '../Screens/Child/ChildSignUp'





const AppNavigator = createStackNavigator({
    FirstScreen:{ screen: FirstScreen ,headerTitle: 'Schovid'},
    TypeSignin:{ screen: TypeSignin ,headerTitle: 'Schovid',},
    ParentSignUp:{ screen:  ParentSignUp ,headerTitle: 'Schovid'},
    ParentLogin:{ screen:  ParentLogin ,headerTitle: 'Schovid'},
    ParentProfile:{ screen:  ParentProfile ,headerTitle: 'Schovid'},
    ParentSignIn: {screen:  ParentSignIn ,headerTitle: 'Schovid'},
    
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