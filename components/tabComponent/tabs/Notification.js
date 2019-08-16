import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import NotificationRow from '../../common/notificatioRow'

class Notification extends React.Component {
    render() {
        return (
            <NotificationRow iconType="birthday"/>
        )
    }
}
const styles = StyleSheet.create({
    notificationRow: {

    },
    likeContainer: {
        backgroundColor: '#d2e8fb',
        width: 40,
        height: 40,
        borderRadius: 400 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10

    },
    horizontalDivider: {
        height: 0.5,
        width: "100%",
        backgroundColor: '#DDDCDC',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 15
    },
    notificationRowWrapper: {
        flexDirection: 'row',
        padding: 10,
        // alignContent: "space-between",
        // justifyContent: 'center',
        // alignItems:'center'

    },
    notificationSummary: {
        paddingRight: 30,
        marginRight:10
    },
    notificationPost: {
        marginRight:10
    }
})
export default Notification;