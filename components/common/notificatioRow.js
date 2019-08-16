import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const NotificationRow = (props) => {

    const renderIcon = () => {
        if (props.iconType === 'like') {
            return <View style={styles.likeContainer}>
                <AntIcon name="like1" size={20} color="blue" />
            </View>;
        }
        else if (props.iconType === "birthday") {
            return <View style={styles.birthdayContainer}>
                <MaterialIcon name="cake" size={20} color="purple" /></View>
        }
        return null;
    }
    return (
        <View>
            <View style={styles.notificationRow}>
                <View style={styles.notificationRowWrapper}>

                    {renderIcon()}
                    <View>
                        <Text style={styles.notificationSummary}>Captain blue and 3 others likes your post Captain blue and 3 others likes your post</Text>
                        <Text style={styles.notificationPost}>Man u vs Chelsea over 3.5</Text>
                    </View>
                </View>
                <View style={styles.horizontalDivider} />

            </View>
        </View>
    )
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
    birthdayContainer: {
        backgroundColor: '#fddcfb',
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
        marginRight: 10
    },
    notificationPost: {
        marginRight: 10
    }
})
export default NotificationRow;