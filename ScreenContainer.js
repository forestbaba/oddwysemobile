import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeActivity from './components/activity/HomeActivity';
import ProfileActivity from './components/activity/ProfileActivity';
import Login from './components/activity/Login'
import Signup from './components/activity/Signup'
import ForgotPassword from './components/activity/ForgotPassword'
import Timeline from './components/activity/Timeline'


const NavigationStack = createStackNavigator({
     Timeline: {
        screen: Timeline,
    },
     Login: {
        screen: Login,
    },
    Signup: {
        screen: Signup,
    },
    ForgotPassword: {
        screen: ForgotPassword,
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