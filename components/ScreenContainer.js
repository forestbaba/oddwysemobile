import React, { Component } from 'react';
import { Button, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeActivity from './activity/HomeActivity';
import ProfileActivity from './activity/ProfileActivity';
import Login from './activity/Login'
import Signup from './activity/Signup'
import ForgotPassword from './activity/ForgotPassword'
import Timeline from './activity/Timeline'
import TabHolder from './tabComponent/TabHolder'
import NewPostActivity from './activity/NewPostActivity'
import ChangePassword from './activity/ChangePassword'
import ChangeMobile from './activity/ChangeMobile'
import ChangeEmail from './activity/ChangeEmail'
const NavigationStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    Signup: {
        screen: Signup,
    },
    ForgotPassword: {
        screen: ForgotPassword,
    },

    TabHolder: {
        screen: TabHolder, navigationOptions: {
            header: null
        }
    },
    NewPostActivity: {
        screen: NewPostActivity, navigationOptions: {
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Drop"
                    color="#04823A"
                    marginRight="50"
                    borderRadius="20"


                />)
        }
    },
   
    ChangePassword: {
        screen: ChangePassword, navigationOptions: {
            title: "Change Password"
        }
    },
    ChangeMobile: {
        screen: ChangeMobile, navigationOptions: {
            title: "Change Mobile Number"
        }
    },
    ChangeEmail: {
        screen: ChangeEmail, navigationOptions: {
            title: "Change Email"
        }
    },
    Home: {
        screen: HomeActivity,
    },
    Profile: {
        screen: ProfileActivity,
    },
});

const Container = createAppContainer(NavigationStack);

export default Container; 