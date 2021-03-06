import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Home from '../activity/HomeActivity'
import Search from '../activity/Signup'
import About from './About'
import Post from './Post'

const ProfileTabScreen = createMaterialTopTabNavigator({
    About: {
        screen: About
    },
    Post: {
        screen: Post
    },
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            // tabBarIcon: ({ focused, horizontal, tintColor }) => {
            //     const { routeName } = navigation.state;
            //     let IconComponent = Ionicons;
            //     let iconName;
            //     if (routeName === 'TimeLine') {
            //         title="time"
            //         // iconName = `ios-basketball${focused ? '' : '-outline'}`;
            //         iconName = `ios-basketball${focused ? '' : ''}`;
            //         // Sometimes we want to add badges to some icons. 
            //         // You can check the implementation below.
            //        // IconComponent = HomeIconWithBadge;
            //     }
            //     else if (routeName === 'Profile') {
            //         iconName = `ios-person`;
            //     } else if (routeName === "Notification") {
            //         iconName ='ios-notifications'

            //     }
            //     else if (routeName === "Search") {
            //         iconName ='ios-search'

            //     }

            //     // You can return any component that you like here!
            //     return <IconComponent name={iconName} size={25} color={tintColor} />;
            // },
        }),
        // order: ['TimeLine', 'Search','Profile', 'Notification'],
        // animationEnabled: true,

        tabBarOptions: {
            showIcon:true,
            activeTintColor: '#01a699',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 15,
                fontStyle: "normal",
                textTransform:'capitalize'

            },
            indicatorStyle: {
                backgroundColor:'#01a699'  
            },
            style: {
                backgroundColor: 'white',
                borderColor: 'transparent',
                borderBottomWidth: 0,
                marginTop:-20
        }
         }//,

        // tabBarOptions: {
        //     labelStyle: {
        //         fontSize: 12,
        //     },
        //     style: {
        //         backgroundColor: 'transparent', borderColor: 'transparent'
        //     },
        // }
    });

export default createAppContainer(ProfileTabScreen);