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
import PLogin from '../screens/Child/CLogin'
import PLogin from '../screens/Child/CLooged'
import CLogin from '../screens/Child/CLogin'

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
        CLogged: {
            screen: CLogged
        }, 
        CLogin: {
            screen: CLogin
        }

    },
    {
        initialRouteName: 'FirstScreen'
    }
)

export default createAppContainer(SwitchNavigator)