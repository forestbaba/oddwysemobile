import React from 'react'
import {
    View, Text, Image, TouchableOpacity, StyleSheet, TextInput, AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import { fetchSinglePost, postComment } from '../../redux/action/postAction'
import Moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/FontAwesome5';
import { Badge } from 'native-base';
import userDefaults from 'react-native-user-defaults'
import SinglePostComment from './SinglePostComment'


class SinglePost extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            maxLength: 150,
            textLength: 0,
            comment: ''


        }
    }

    componentDidMount() {
        setTimeout(() => {
                    this.props.fetchSinglePost(this.props.navigation.state.params.postid)

        },2);
    }

    onChangeText(text) {
        this.setState({
            textLength: this.state.maxLength - text.length, comment: text
        });
    }
    async handlePostComment() {
        await AsyncStorage.getItem('user', (error, result) => {
            this.setState({ user: result })
            console.log('User details gotten from asyc storage', this.state.user)
        })
        const user = JSON.parse(this.state.user)
        const comment = {
            postid: this.props.navigation.state.params.postid,
            text: this.state.comment,
            user: user._id

        }
        this.props.postComment(comment)
        console.log('Getting user details now: ', comment)



    }

    render() {
        const { post } = this.props.post
        console.log('personal post single: ', this.props.post.post)
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.postUser}>
                    <Image
                        source={require('../../assets/images/userimage.png')}
                        style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                    />
                    <View>
                        <Text style={styles.usernameText}>post user</Text>
                        <Text style={styles.username}>username</Text>
                    </View>
                </View>
                <Text style={{ marginLeft: 20, fontSize: 20 }}>{post.text}</Text>
                <View style={styles.postAtt}>
                    <Text style={styles.postTime}>
                        <Icon name="clock-o" color="#707070" size={18} /> {Moment(post.date).fromNow(true)}</Text>
                    <TouchableOpacity style={styles.likesView}><Text ><Icon name="heart" color="#707070" size={18} /> {post.likecounter} </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.commentButton}><Text ><Icon name="comments" color="#707070" size={18} /> {post.commentCounter}</Text></TouchableOpacity>
                </View>
                {
                    this.props.post.post.commentCounter > 0 ? this.props.post.post.comments.map((i, e) => {
                        return (
                            <SinglePostComment name={i.user[0].name} text={i.text} time={i.date}/>)
                    }) : null
                }
                <View style={{ flex: 1 }}>
                    <View style={styles.fabCounter}>
                        <Text >{this.state.textLength}</Text>

                    </View>
                    <View style={{ position: 'absolute', bottom: 10, flex: 1, width: "100%", marginLeft: 10, marginRight: 10, marginBottom: -17 }}>

                        <View style={styles.fabText}>
                            <TextInput
                                placeholder="drop two odds for boys"
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.postText}
                                maxLength={150}
                                ref={input => { this.textInput = input }}
                                onChangeText={this.onChangeText.bind(this)}
                            />

                            <TouchableOpacity
                                onPress={this.handlePostComment.bind(this)}
                                style={styles.fabSend}>
                                <Icon name="paper-plane"
                                    size={20} color="#01a699" />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        justifyContent: "space-between",
        width: "90%",
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

const mapStateToProps = state => ({
    post: state.post,
    auth: state.auth
})
export default connect(mapStateToProps, { fetchSinglePost, postComment })(SinglePost)