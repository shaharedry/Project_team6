import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Logged from '../screens/Logged'

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
        }

    },
    {
        initialRouteName: 'Login'
    }
)



export default createAppContainer(SwitchNavigator)