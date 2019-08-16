import React from 'react'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import TimeLine from '../activity/Timeline'
import Profile from './tabs/Profile'
import Notification from './tabs/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './tabs/Search'
import TimelineContainer from '../activity/Timeline/TimelineContainer'


const TabNavigator = createMaterialTopTabNavigator({
    TimeLine: {
        screen: TimelineContainer
    },
    Search: {
        screen: Search
    },
    Profile: {
        screen: Profile
    },
    Notification: {
        screen: Notification
    }
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'TimeLine') {
                    title="time"
                    // iconName = `ios-basketball${focused ? '' : '-outline'}`;
                    iconName = `ios-basketball${focused ? '' : ''}`;
                    // Sometimes we want to add badges to some icons. 
                    // You can check the implementation below.
                   // IconComponent = HomeIconWithBadge;
                }
                else if (routeName === 'Profile') {
                    iconName = `ios-person`;
                } else if (routeName === "Notification") {
                    iconName ='ios-notifications'
                    
                }
                else if (routeName === "Search") {
                    iconName ='ios-search'
                    
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        order: ['TimeLine', 'Search','Profile', 'Notification'],
        animationEnabled: true,
       
        tabBarOptions: {
            showIcon:true,
            activeTintColor: '#01a699',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 12,
                fontStyle: "normal",
                textTransform:'capitalize'

            },
            style: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderBottomWidth:0
        }
        },
       
        // tabBarOptions: {
        //     labelStyle: {
        //         fontSize: 12,
        //     },
        //     style: {
        //         backgroundColor: 'transparent', borderColor: 'transparent'
        //     },
        // }
    })

export default createAppContainer(TabNavigator)