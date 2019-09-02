import React, { Component } from 'react';
import { Button, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Tabx from './ProfileTabScreenHolder'
const NavigationStack = createStackNavigator({


    Tabx: {
        screen: Tabx, navigationOptions: {

            header: null
        },

    },
   
});

const ContainerX = createAppContainer(NavigationStack);

export default ContainerX; 