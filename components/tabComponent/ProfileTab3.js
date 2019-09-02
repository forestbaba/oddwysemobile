import React, { Component } from 'react';
import { Button, Text } from 'react-native'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import TabHolder from '../tabComponent/TabHolder'

const NavigationStack = createStackNavigator({


    TabHolder: {

        screen: TabHolder, navigationOptions: {

            header: null
        },

    },
   
});

const Container = createAppContainer(NavigationStack);

export default Container; 