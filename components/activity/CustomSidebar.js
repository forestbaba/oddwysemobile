//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import ForgotPassword from './ForgotPassword'
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class CustomSidebarMenu extends Component {
    constructor() {
        super();
        this.items = [
            {
                navOptionThumb: 'home',
                navOptionName: 'Timeline',
                screenToNavigate: "Timeline",
            },
            {
                navOptionThumb: 'person',
                navOptionName: 'Profile',
                screenToNavigate: 'Screen1',
            },
            {
                navOptionThumb: 'build',
                navOptionName: 'Third Screen',
                screenToNavigate: 'NavScreen3',
            },
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Top Large Image */}
                <Image
                    source={require('../../assets/images/userimage.png')}
                    style={styles.sideMenuProfileIcon}
                />
                <Text>James Paul</Text>
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />

                {this.items.map((item, key) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingRight: 20,

                            backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                        }}>
                        <View style={{ marginRight: 10, marginLeft: 20 }}>
                            <Icon name={item.navOptionThumb} size={25} color="#808080" />
                        </View>
                        <Text
                            style={{
                                fontSize: 15,
                                color: global.currentScreenIndex === key ? 'red' : 'black',
                            }}
                            onPress={() => {
                                global.currentScreenIndex = key;
                                this.props.navigation.navigate(item.screenToNavigate);
                            }}>
                            {item.navOptionName}
                        </Text>
                    </View>
                ))}
            </View>


        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});