import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NewPost from './NewPost';
import UserProfile from './UserProfile';
import TimeLine from '../Timeline'
import SinglePost from '../SinglePost'




const NavigationStack = createStackNavigator({
    
    TimeLine: {
        screen: TimeLine, navigationOptions: {
            header: null
        }},
    NewPost: { screen: NewPost },
    UserProfile: {screen: UserProfile,
    },
    // SinglePost: {
    //     screen: SinglePost,
    //     navigationOptions: {
    //         title: "Post"
    //     }
    // },
  
});

const TimelineContainer = createAppContainer(NavigationStack);

export default TimelineContainer; 