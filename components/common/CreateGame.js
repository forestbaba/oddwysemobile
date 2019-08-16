import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const CreateGame = () => {
    return (
        <View style={{ alignSelf:"stretch"}}>
            <View style={styles.createGameShadow}/>

            <View style={styles.itemContainerWrapper}>
                {/* <Animated.View style={styles.itemContainerWrapper}> */}
                {/* <View style={styles.horizontalDivider} /> */}

            </View>
            <View style={styles.itemContainer}>
                <MCIcon name="cards-spade" size={25} color="white" />
                <TouchableOpacity>
                    <Text style={styles.itemTitle}>Ticket</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <MCIcon name="cards-heart" size={25} color="white" />
                <TouchableOpacity>
                    <Text style={styles.itemTitle}>Games</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <MCIcon name="cards-diamond" size={25} color="white" />
                <TouchableOpacity>
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
        marginTop: 5,
        marginLeft: 10
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
        height: 100,
        borderRadius: 25,
        marginTop: 5,
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
        alignSelf:"stretch"
        //  marginTop: 150
    },
})
export default CreateGame;