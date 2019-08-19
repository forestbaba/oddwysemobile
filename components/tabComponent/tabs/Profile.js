import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { bold } from 'ansi-colors';
import AccountSettings from '../../common/AccountSettings'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSettingVisible: false
        }
    }


    renderSettings = () => {
        this.setState({
            isSettingVisible: !this.state.isSettingVisible//toggles the visibilty of the text
        })
    }
    render() {
        return (
            <View style={{ flex:1}}>
                <ScrollView style={styles.scrollContainer}>

                    <View style={styles.parentContainer1}>
                        <View >
                            <TouchableOpacity onPress={this.renderSettings.bind(this)} style={styles.gear} >
                                <Ionicons name="md-settings" size={25} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.nameAndImageContainer}>
                            <Image
                                source={require('../../../assets/images/userimage.png')}
                                style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                            />
                            <View style={styles.nameContainer}>
                                <Text style={styles.fullname}>James Paul</Text>
                                <Text style={styles.username}>jPaul</Text>
                            </View>

                        </View>
                        <View style={styles.locationContainer}>
                            <View style={styles.locationContainer2}>
                                <Icon name="location-pin" size={15} color="#FFFFFF" />
                                <Text style={styles.locationTitle}>Eko hotel</Text>
                            </View>

                            <View>
                                <View style={styles.messageAndFollowContainer}>
                                    <TouchableOpacity style={styles.messageIcon}>
                                        <Icon name="message" color="#FFFFFF" size={25} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.followContainer}>
                                        <Icon name="plus" size={15} color="#099349" style={styles.plus} />
                                        <Text style={styles.followButton}>Follow</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        <View style={styles.userAttributeContainer}>
                            <View style={styles.followerAndFollowing}>
                                <Text style={styles.attributeStyle}>
                                    16000
                        </Text>
                                <Text style={styles.attributeTitle}>
                                    Following
                        </Text>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={styles.followerAndFollowing}>
                                <Text style={styles.attributeStyle}>
                                    1200
                        </Text>
                                <Text style={styles.attributeTitle}>
                                    Following
                        </Text>
                            </View>
                            <View style={styles.verticalDivider} />

                            <View style={styles.followerAndFollowing}>
                                <Text style={styles.attributeStyle}>
                                    2000
                        </Text>
                                <Text style={styles.attributeTitle}>
                                    Posts
                        </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.parentContainer2}>
                        <Text style={styles.feedTitle}>Feeds</Text>
                    </View>
                    {this.state.isSettingVisible ? <AccountSettings closeMe={this.renderSettings}
                        navigate={this.props.navigation.navigate}
                        destination="ChangePassword"
                        changemobile="ChangeMobile"
                        changeEMail="ChangeEmail" /> : null}


                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nameAndImageContainer: {

        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 40,
    },
    nameContainer: {
        marginLeft: 20
    },
    fullname: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    username: {
        fontStyle: 'italic',
        color: '#DDDCDC'
    },
    nameAndUsernameContainer: {
        flexDirection: 'column'
    },
    followAndMessageContainer: {
        flexDirection: 'row',
    },
    followerAndFollowing: {
        flexDirection: "column",
        padding: 10
    },
    userAttributeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15

    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%'
    },
    locationTitle: {
        paddingLeft: 10,
        color: '#FFFFFF'
    },
    followContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius: 15,
        height: 30,
        width: 90,
        paddingLeft: 10,
        marginRight: 10
    },
    followButton: {
        marginLeft: 5,
        color: '#099349',
        marginTop: -3
    },
    plus: {
        marginTop: -1
    },
    parentContainer1: {
        // backgroundColor: '#099349',
        backgroundColor: '#01a699',
        paddingBottom: 70,
        flex:1
        // marginTop:-150
    },
    locationContainer2: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 60,
        marginLeft: 15

    },
    verticalDivider: {
        height: 30,
        width: 0.5,
        backgroundColor: '#DDDCDC',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 15
    },
    attributeStyle: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: "bold"
    },
    attributeTitle: {
        color: '#DDDCDC'
    }, messageAndFollowContainer: {
        flexDirection: 'row'
    },
    messageIcon: {
        marginRight: 10
    },
    parentContainer2: {
        flex:1,
        width: '100%',
        height: '100%',
        borderRadius: 25,
        marginTop: -50,
        backgroundColor: 'white'
    },
    feedTitle: {
        fontSize: 20,
        marginLeft: 10,
        padding: 10,
        fontWeight: "bold"

    },
    gear: {
        left: -10,
        top: 10,
        alignSelf: "flex-end",

    },
    settingsContainer: {
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    settingsContent: {
        // flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position: 'absolute',

        //  marginTop: 150
    },
    scrollContainer: {
        flex:1
    },
    settingsRow: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: "center",
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    settingsIconContainer: {
        backgroundColor: '#CEF6E0',
        width: 30,
        height: 30,
        borderRadius: 400 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10

    },
    settingsText: {
        fontWeight: "bold",
        fontSize: 15
    }

})
export default Profile;