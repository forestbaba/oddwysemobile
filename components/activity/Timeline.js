import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, TouchableOpacity,
    StatusBar, TextInput, Image
} from 'react-native';

import CardView from 'react-native-cardview'
import { StackNavigator } from 'react-navigation';



class Timeline extends Component {
    static navigationOptions = {
        title: 'Timeline',
        // headerStyle: {
        //     backgroundColor: '#03A9F4',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },

    };

    state = {
        names: [
            { 'name': 'Ben', 'id': 1 },
            { 'name': 'Susan', 'id': 2 },
            { 'name': 'Robert', 'id': 3 },
            { 'name': 'Mary', 'id': 4 },
            { 'name': 'Daniel', 'id': 5 },
            { 'name': 'Laura', 'id': 6 },
            { 'name': 'John', 'id': 7 },
            { 'name': 'Debra', 'id': 8 },
            { 'name': 'Aron', 'id': 9 },
            { 'name': 'Ann', 'id': 10 },
            { 'name': 'Steve', 'id': 11 },
            { 'name': 'Olivia', 'id': 12 }
        ]
    }
    render() {
        return (
            <View>
                <ScrollView >
                    {
                        this.state.names.map((item, index) => (
                            <View style={styles.parentComponent}>
                                <View key={item.id} style={styles.item} >
                                    <View style={styles.parentComponent}>
                                        <View style={styles.profileImage}>
                                            <Image
                                                source={require('../../assets/images/userimage.png')}
                                                style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                                            />
                                        </View>
                                        <View>
                                            <View style={styles.nameAndUsername}>
                                                <Text style={styles.usernameText}>{item.name}</Text>
                                                <Text style={styles.username}>jcole</Text>
                                            </View>

                                            <Text style={styles.postText}>Copy the following link into the website you'll use this resource on. If you want to know more, read the </Text>
                                            <View style={styles.postAtt}>
                                                <Text style={styles.postTime}>3 hrs ago</Text>
                                                <Text style={styles.likesView}>15 likes</Text>
                                                <Text style={styles.commentButton}>Comment</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>


        )
    }
}


const styles = StyleSheet.create({
    parentComponent: {
        flexDirection: 'row',
        margin: 10

    },
    secondChild: {
        flexDirection: 'column'
    },
    postAtt: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 100

    },
    usernameText: {
        color: 'black',
        fontWeight: "bold",
    },
    nameAndUsername: {
        marginLeft: 20,
        color: 'black',
        marginLeft: 15,

    },
    username: {
        textAlign: 'left',
        fontSize: 13,
        flexWrap: 'wrap',
        color: '#707070',
        paddingLeft: 3,
        fontStyle: 'italic'
    },
    postTime: {
        flex: 1,
        textAlign: 'left',
        fontSize: 13,
        flexWrap: 'wrap',
        color: '#707070',
    },
    likesView: {
        flex: 1,
        textAlign: 'left',
        fontSize: 13,
        flexWrap: 'wrap',
        color: '#707070',
    },
    commentButton: {
        flex: 1,
        textAlign: 'left',
        fontSize: 13,
        flexWrap: 'wrap',
        color: '#707070',
    },
    postText: {
        color: '#707070',
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'left'

    },
    profileImage: {
        marginTop: 5
    }
})
export default Timeline;