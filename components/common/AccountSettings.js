
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const AccountSettings = (props) => {

    closeMe = () =>{
        props.closeMe()
    }
    return (
        <View style={styles.settingsContent}>
            <Text>Settings</Text>
            <View style={styles.settingsRow}>
                <TouchableOpacity style={{ marginRight: 30 }} onPress={this.closeMe}>
                <View >
                    <MaterialIcons name="arrow-back" size={20} color="black" />
                </View>     
                </TouchableOpacity>
               
                    <Text style={styles.settingsText}>Settings</Text>

            </View>
            <View style={styles.horizontalDivider} />

            <View style={styles.settingsRow}>
                <View style={styles.settingsIconContainer}>
                    <MCIcon name="shield-key" size={20} color="#A9A9A9" />
                </View>
                <TouchableOpacity onPress={() => props.navigate(props.destination)}>
                    <Text>Change Password</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.settingsRow}>
                <View style={styles.settingsIconContainer}>
                    <Icon name="phone" size={20} color="#A9A9A9" />
                </View>
                <TouchableOpacity onPress={() => props.navigate(props.changemobile)}>
                    <Text>Change Mobile Number</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.settingsRow}>
                <View style={styles.settingsIconContainer}>
                    <Icon name="email" size={20} color="#A9A9A9" />
                </View>
                <TouchableOpacity onPress={() => props.navigate(props.changeEMail)}>
                    <Text>Change Email</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

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
        alignSelf: "flex-end"

    },
    settingsContainer: {
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    settingsContent: {
        flex: 1,
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
    },
    horizontalDivider: {
        width: "100%",
        backgroundColor: '#DDDCDC',
        marginTop: 1,
        marginLeft: 30,
        marginRight:60
    },

})
export default AccountSettings;