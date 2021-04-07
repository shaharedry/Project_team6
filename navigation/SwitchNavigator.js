import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Logged from '../screens/Logged'
import FirstScreen from '../screens/FirstScreen'

const SwitchNavigator = createSwitchNavigator(
    {
        FirstScreen: {
            screen: FirstScreen
        },

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
        initialRouteName: 'FirstScreen'
    }
)

export default createAppContainer(SwitchNavigator)