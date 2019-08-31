import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage } from 'react-native'
import _ from 'lodash'

class UserCard extends React.Component {
    constructor(props) {
        super(props)

        state = {
            user: {}
        }
    }

    async componentWillMount() {
        await AsyncStorage.getItem('user', (error, result) => {
            this.setState({ user: result })

            const user = JSON.parse(this.state.user)

            // console.log('==========|| useri: ',this.props.userid)
            // console.log('--------------|-- |------------|-|--------> ',user.user.following.people)
            // console.log('--------------|user if |------------|-|--------> ', _.includes(user.user.following, this.props.userid) )

            // for (var i = 0, len = user.user.following.length; i < len; i++) {
            //     console.log('Counter ', i, 'and ', user.user.following[i].people, 'Array length: ', user.user.following.length)
            //     //console.log('object keys: ', user.user.following[i].people);
            //     console.log(_.includes(user.user.following[i].people, this.props.userid))
            // }


        })

        console.log('i have gotten the user: ', user)
    }

    async renderView() {
        await AsyncStorage.getItem('user', (error, result) => {
            this.setState({ user: result })


            if (_.includes(user.user.following[i].people, this.props.userid) === true) {

                return (
                    <View style={styles.secondParentContainer}>
                        <Image
                            source={require('../../assets/images/userimage.png')}
                            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                        />
                        <View>
                            <View style={styles.nameAndUsernameContainer}>
                                <Text>{this.props.name}</Text>
                                <Text>{this.props.username}</Text>
                            </View>
                            <View style={styles.followAndUnfollowButtonContainer}>
                                <TouchableOpacity style={styles.unfollowButton}><Text style={styles.unfollowButtonText}>UnFollow</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                    )
                           
            } else {
                return (
                    <View style={styles.secondParentContainer}>
                        <Image
                            source={require('../../assets/images/userimage.png')}
                            style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                        />
                        <View>
                            <View style={styles.nameAndUsernameContainer}>
                                <Text>{this.props.name}</Text>
                                <Text>{this.props.username}</Text>
                            </View>
                            <View style={styles.followAndUnfollowButtonContainer}>
                                <TouchableOpacity style={styles.followButton} onPress={this.props.onFollowUser}><Text style={styles.followButtonText}>Follow</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.unfollowButton}><Text style={styles.unfollowButtonText}>UnFollow</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                )
                
            }


        })
    }
    async showSomething() {
        const user =await  JSON.parse(this.state.user)

        return (
            <View>
                {
                    _.includes(user.user.following[i].people, this.props.userid) === true ?
                        <Text>View i ant to show</Text> : <Text>View i'm showing</Text>

                }
            </View>
        )
    }
    render() {

        // const user = JSON.parse(this.state.user)

        // console.log('==========|| useri: ',this.props.userid)
        // console.log('--------------|-- |------------|-|--------> ',user.user.following.people)
        // console.log('--------------|user if |------------|-|--------> ', _.includes(user.user.following, this.props.userid) )

        // for (var i = 0, len = user.user.following.length; i < len; i++) {
        //     console.log('Counter ', i, 'and ', user.user.following[i].people, 'Array length: ', user.user.following.length)
        //     //console.log('object keys: ', user.user.following[i].people);
        //     console.log(_.includes(user.user.following[i].people, this.props.userid))
        // }
        return (
            <View style={styles.firstParentContainer}>

                <View style={styles.secondParentContainer}>
                    <Image
                        source={require('../../assets/images/userimage.png')}
                        style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                    />
                    <View>
                        <View style={styles.nameAndUsernameContainer}>
                            <Text>{this.props.name}</Text>
                            <Text>{this.props.username}</Text>
                        </View>
                        <View style={styles.followAndUnfollowButtonContainer}>
                            <TouchableOpacity style={styles.followButton}
                                onPress={this.props.onFollowUser}>
                                <Text style={styles.followButtonText}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.unfollowButton}>
                                <Text style={styles.unfollowButtonText}>UnFollow</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    firstParentContainer:
        { flex: 1 },
    secondParentContainer: {
        // flex: 1,
        flexDirection: 'row',
        margin: 15,
        width: "100%",
        borderRadius: 10,
        paddingTop: 20,
        paddingLeft: 20,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },


        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
        marginLeft: 20,
        shadowOpacity: 0.53,
        shadowRadius: 3.97,
    },
    nameAndUsernameContainer: {
        flexDirection: "column",
        margin: 5,
        marginLeft: 10
    },
    followAndUnfollowButtonContainer: {
        flexDirection: "row",
        margin: 10
    },
    followButton: {
        // borderTopLeftRadius: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'transparent',
        width: 75,
        margin: 1.5,
        backgroundColor: '#01a699'
    },
    unfollowButton: {

        // borderBottomRightRadius: 15,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#01a699',
        width: 75,
        margin: 1.5
    },
    followButtonText: {
        padding: 5,
        width: "100%",
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 13,
        color: '#FFFFFF'
    },
    unfollowButtonText: {
        padding: 5,
        width: "100%",
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 13,
        color: '#01a699'
    }


})
export default UserCard;