import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import Moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';

class SinglePostComment extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <View style={styles.postUser}>
                    <Image
                        source={require('../../assets/images/userimage.png')}
                        style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                    />
                    <View style={{marginLeft: 5}}>
                        <Text style={styles.usernameText}>{this.props.name}</Text>
                        <Text style={styles.username}>{this.props.username !== null ? this.props.username : null}</Text>
                        <Text style={{ marginLeft: 0, fontSize: 15 }}>{this.props.text}</Text>

                    </View>

                </View>
                <View style={styles.postAtt}>
                    <Text style={styles.postTime}>
                        <Icon name="clock-o" color="#707070" size={18} />  {Moment(this.props.time).fromNow(true)}</Text>
                    <TouchableOpacity style={styles.likesView}><Text ><Icon name="heart" color="#707070" size={18} /> 4 </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.commentButton}><Text ><Icon name="comments" color="#707070" size={18} /> 6</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentComponent: {
        flexDirection: 'row',
        margin: 10,
        flex: 1

    },
    secondChild: {
        flexDirection: 'column'
    },
    postAtt: {
        flexDirection: 'row',
        alignItems:"flex-end",
        justifyContent: "space-between",
        width: "60%",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 10

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
        // flex: 1,
        textAlign: 'left',
        fontSize: 13,
        // flexWrap: 'wrap',
        color: '#707070',
    },
    likesView: {
        // flex: 1,
        textAlign: 'left',
        fontSize: 13,
        // flexWrap: 'wrap',
        color: '#707070',
    },
    commentButton: {
        // flex: 1,
        textAlign: 'left',
        fontSize: 13,
        // flexWrap: 'wrap',
        color: '#707070',
    },
    postText: {
        color: 'white',
        marginLeft: 120,
        marginRight: 20,
        textAlign: 'left',
        padding: 20,
        backgroundColor: 'white'


    },
    profileImage: {
        marginTop: 5
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: '#01a699',
    },
    fab: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 40,
        backgroundColor: '#01a699',
        borderRadius: 100,
    },
    fabCounter: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        position: 'absolute',
        bottom: 73,
        left: 10,
        height: 40,
        backgroundColor: '#01a699',
        borderRadius: 100,
    },
    fab: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 40,
        backgroundColor: '#01a699',
        borderRadius: 100,
    },
    TextInputStyleClass: {
        textAlign: 'center',
        height: 45,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginLeft: 35,
        marginRight: 25,

        position: 'absolute',

    },
    fabText: {

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        position: 'absolute',
        bottom: 10,
        height: 70,
        backgroundColor: '#01a699',
        borderRadius: 20,
        marginRight: -10,
        paddingLeft: 10,
        paddingRight: 50,
        maxHeight: 80,
        color: '#FFFFFF'

    },
    sendFab: {
        // borderWidth: 1,
        // borderColor: 'rgba(0,0,0,0.2)',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: 70,
        position: 'absolute',
        //bottom: 10,
        right: 10,
        // height: 50,
        // backgroundColor: '#FFFFFF',
        // borderRadius: 100,
        marginBottom: 90
    },
    postText: {
        textAlign: 'left',

    },
    fabSend: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
    },
    postWidget: {
        alignItems: "flex-start",
        justifyContent: 'flex-end',
        backgroundColor: 'red',
        height: 30,
        flexDirection: 'row',
        bottom: 70,
        position: 'absolute',
        width: '100%',
        paddingRight: 20
    },
    widgetCancel: {
        paddingBottom: 20,
        paddingLeft: 8
    },
    postAndAttContainer: {
        flexDirection: "column"
    },
    postBody: {
        marginLeft: 20,
        flex: 1,
        width: "100%"
    },
    postUser: {
        flexDirection: "row",
        padding: 10
    }
})

// const mapStateToProps = state => ({
//     post: state.post,
//     auth: state.auth
// })

export default SinglePostComment