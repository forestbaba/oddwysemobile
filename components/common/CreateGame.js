import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FAwesomIcon from 'react-native-vector-icons/FontAwesome'
import FAwesomIcon5 from 'react-native-vector-icons/FontAwesome5'
import { white } from 'ansi-colors';

const CreateGame = (props) => {
    return (
        <View style={{ alignSelf: "stretch" }}>
            <View />

            <View style={styles.itemContainerWrapper}>
                {/* <Animated.View style={styles.itemContainerWrapper}> */}
                {/* <View style={styles.horizontalDivider} /> */}

            </View>
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={props.hideMe}><FAwesomIcon name="soccer-ball-o" size={25} color="white" style={{ marginTop:12}} /></TouchableOpacity>

            </View>
            <View style={styles.itemContainer}>
                <FAwesomIcon5 name="football-ball" size={25} color="white" style={styles.iconStyle}/>
                <TouchableOpacity onPress={props.showTicket}>
                    <Text style={styles.itemTitle}>Ticket</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <FAwesomIcon5 name="golf-ball" size={25} color="white" style={styles.iconStyle}/>
                <TouchableOpacity onPress={props.showClub}>
                    <Text style={styles.itemTitle}>Club</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <FAwesomIcon5 name="bowling-ball" size={25} color="white" style={styles.iconStyle}/>
                <TouchableOpacity onPress={props.showCustom}>
                    <Text style={styles.itemTitle}>Custom</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingLeft: 5,
        marginTop: 5,
        marginLeft: 5

    },
    itemTitle: {
        marginTop: 25,
        marginLeft: 10,
        color: "white"
    },
    fab: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        bottom: 10,
        left: 10,
        height: 40,
        backgroundColor: '#01a699',
        borderRadius: 100,
        alignSelf: "center"
    },
    itemContainerWrapper: {
        backgroundColor: '#01a699',
        position: 'absolute',
        width: 35,
        height: 185,
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 5,
        // transform: [
        //     {
        //         translateY: this.state.animated.interpolate({
        //             inputRange: [0, 1],
        //             outputRange:[0,1]
        //         })
        //     }
        // ]
        transform: [
            // {
            //     translateY: this.state.anims.interpolate({
            //         inputRange: [0, 1],
            //         outputRange:[0,1]
            //     })
            // }
        ]


    },
    parentContainer: {
        flexDirection: "row"
    },
    horizontalDivider: {
        height: 0.5,
        width: "100%",
        backgroundColor: '#DDDCDC',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 40
    },
    createGameShadow: {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position: 'absolute',
        alignSelf: "stretch"
        //  marginTop: 150
    },
    iconStyle: {
        marginTop: 15
    }
})
export default CreateGame;