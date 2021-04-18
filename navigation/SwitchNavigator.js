import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Logged from '../screens/Logged'
import PLogin from '../screens/Parent/PLogin'
import PSignup from '../screens/Parent/PSignup'
import PLogged from '../screens/Parent/PLogged'
import FirstScreen from '../screens/FirstScreen'
import TypeSignin from '../screens/TypeSignin'
import TLogin from '../screens/Techer/TLogin'
import TSignup from '../screens/Techer/TSignup'
import TLogged from '../screens/Techer/TLogged'
import EnterGrades from '../screens/Techer/EnterGrades'
import EnterPresence from '../screens/Techer/EnterPresence'
import CSignup from '../screens/Child/CSignup'
import CLogin from '../screens/Child/CLogin'
import Clogged from '../screens/Child/Clogged'
import Grades from '../screens/Child/Grades'
import Presence from '../screens/Child/Presence'

const SwitchNavigator = createSwitchNavigator(
    {
        FirstScreen: {
            screen: FirstScreen
        },

        TypeSignin: {
            screen: TypeSignin
        },

        Login: {
            screen: Login
        },

        Signup: {
            screen: Signup
        },

        Logged: {
            screen: Logged
        },

        PLogin: {
            screen: PLogin
        },

        PSignup: {
            screen: PSignup
        },
        
        PLogged: {
            screen: PLogged
        },
        
        TLogin: {
            screen: TLogin
        },

        TSignup: {
            screen: TSignup
        },

        TLogged: {
            screen: TLogged
        },

        EnterGrades: {
            screen: EnterGrades
        },

        EnterPresence: {
            screen: EnterPresence
        },
        
        CSignup: {
            screen: CSignup
        },

        CLogin: {
            screen: CLogin
        },

        Clogged: {
            screen: Clogged
        },

        Grades: {
            screen: Grades
        },

        Presence: {
            screen: Presence
        },

    },
    {
        initialRouteName: 'FirstScreen'
    }
)

export default createAppContainer(SwitchNavigator)