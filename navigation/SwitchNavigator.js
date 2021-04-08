import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Logged from '../screens/Logged'
import PLogin from '../screens/Parent/PLogin'
import PSignup from '../screens/Parent/PSignup'
import PLogged from '../screens/Parent/PLogged'

const SwitchNavigator = createSwitchNavigator(
    {
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
        }
        

    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)