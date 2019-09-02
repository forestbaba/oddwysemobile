import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, TouchableOpacity,
    StatusBar, TextInput, Image, Easing, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import { getPersonalPost } from '../../redux/action/postAction'
import { getCurrent } from '../../redux/action/authAction'
import Moment from "moment";

// import posed, { PoseGroup } from 'react-pose';


import CardView from 'react-native-cardview'
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import startMainTab from './startMainTab';
import Drawer from 'react-native-drawer-menu';
import SearchCard from '../common/SearchCard'
import * as Animatable from 'react-native-animatable';




// const Modal = posed.div({
//     enter: {
//         y: 0,
//         opacity: 1,
//         delay: 300,
//         transition: {
//             y: { type: 'spring', stiffness: 1000, damping: 15 },
//             default: { duration: 300 }
//         }
//     },
//     exit: {
//         y: 50,
//         opacity: 0,
//         transition: { duration: 150 }
//     }
// });

// const Shade = posed.div({
//     enter: { opacity: 1 },
//     exit: { opacity: 0 }
// });

class Timeline extends Component {

    componentWillMount() {
        console.log('Inside timeline', AsyncStorage.getItem("USER_TOKEN"))

    }
    componentDidMount() {
        this.props.getCurrent()
        console.log('personal posts: ', this.props.getPersonalPost())
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        if (params.hideHeader) {
            return {
                header: null,
            }
        }

        return {
            headerLeft: <Text>Hi</Text>,
            headerRight: <Text>Hi</Text>,
            headerTitle: <Text>Hi</Text>
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            renderPost: false,
            isVisible: false,
            isOptionVisible: false,


            // names: [
            //     { 'name': 'Ben', 'id': 1 },
            //     { 'name': 'Susan', 'id': 2 },
            //     { 'name': 'Robert', 'id': 3 },
            //     { 'name': 'Mary', 'id': 4 },
            //     { 'name': 'Daniel', 'id': 5 },
            //     { 'name': 'Laura', 'id': 6 },
            //     { 'name': 'John', 'id': 7 },
            //     { 'name': 'Debra', 'id': 8 },
            //     { 'name': 'Aron', 'id': 9 },
            //     { 'name': 'Ann', 'id': 10 },
            //     { 'name': 'Steve', 'id': 11 },
            //     { 'name': 'Olivia', 'id': 12 }
            // ]
            posts: []

        }
        this.renderPostView = this.renderPostView.bind(this);

    }

    handleFetchSinglePost(postid) {
        this.props.navigation.navigate('SinglePost', {
            postid: postid,
        })
        // console.log('handleFetchSinglePost was clicked: ',postid)
        // this.props.fetchSinglePost(postid)
    }

    renderPostView() {
        this.setState({
            renderPost: true,
            isVisible: true
        })
    }

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

    // onButtonPress = () => {
    //     startMainTab();
    // }

    showOptions() {
        console.log('On long press called', this.state.isOptionVisible)
        this.setState({ isOptionVisible: true })
    }


    render() {

        const { posts } = this.props.post
        // console.log('The props i get: ', posts)
        //this.setState({posts:posts})
        var drawerContent = (<View style={styles.drawerContent}>
            <View style={styles.leftTop} />
            <View style={styles.leftBottom}>
                <View><Text>Drawer Content</Text></View>
            </View>
        </View>);
        // customize drawer's style (Optional)
        var customStyles = {
            drawer: {
                shadowColor: '#000',
                shadowOpacity: 0.4,
                shadowRadius: 10
            },
            mask: {}, // style of mask if it is enabled
            main: {} // style of main board
        };
        const { isVisible } = this.state;

        // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^', this.props.auth.fulluser.name)
        return (


            <View style={{ flex: 1 }}>

                {
                    this.state.isOptionVisible === true ?
                        <Animatable.View pointerEvents="none"
                            animation="bounceInUp" duration={500} easing="ease-out"

                            style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            bottom: 0, right: 0, position: "absolute",
                            left: 0, top: 0,elevation:2,flex:1
                        }}>
                            {/* <View style={{
                                top: 0, right: 0,
                                left: 0, position: "absolute",
                                flex: 1, height: "100%"
                            }}>

                            </View> */}
                            <View style={{
                                backgroundColor: "white",
                                bottom: 0, right: 0,
                                left: 0,
                                opacity:1,
                                //top: -200,
                                position: "absolute",
                                borderTopLeftRadius: 25,
                                borderTopRightRadius: 25,
                                padding: 20,
                                elevation:20,
                                flex: 1
                            }}>
                                <TouchableOpacity style={{ flexDirection: "row", paddingBottom: 15 }}>
                                    <Iconn name="heart"
                                        size={18} color="#707070" />
                                    <Text style={{ paddingLeft: 35, paddingRight: 10, fontSize: 18, fontWeight: "normal" }}>Like</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: "row", paddingBottom: 15 }}>
                                    <Iconn name="comment-alt"
                                        size={18} color="#707070" />
                                    <Text style={{ paddingLeft: 35, paddingRight: 10, fontSize: 18, fontWeight: "normal" }}>Comment</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: "row", paddingBottom: 15 }}>
                                    <Iconn name="star"
                                        size={18} color="#707070" />
                                    <Text style={{ paddingLeft: 35, paddingRight: 10, fontSize: 18, fontWeight: "normal" }}>Star</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: "row", paddingBottom: 15 }}>
                                    <MCIcon name="delete-outline"
                                        size={23} color="#707070" />
                                    <Text style={{ paddingLeft: 35, paddingRight: 10, fontSize: 18, fontWeight: "normal" }}>Delete</Text>

                                </TouchableOpacity>
                            </View>

                        </Animatable.View> : null
                }
                <ScrollView >
                    {
                        posts.map((item, index) => (

                            <View style={styles.parentComponent}>
                                <View key={index} style={styles.item} >
                                    <TouchableOpacity
                                        onLongPress={this.showOptions.bind(this)}
                                        onPress={this.handleFetchSinglePost.bind(this, item._id)}>

                                        <View style={styles.parentComponent}>

                                            <View style={styles.profileImage}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../assets/images/userimage.png')}
                                                        style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
                                                    /></TouchableOpacity>
                                            </View>
                                            <View>


                                                <View style={styles.nameAndUsername}>
                                                    <Text style={styles.usernameText}>{item.user[0].name}</Text>
                                                    <View style={{
                                                        flex: 1, paddingLeft: 10,
                                                        paddingRight: 10
                                                    }}><Text style={styles.username}>jcole</Text></View>
                                                </View>


                                                <View style={styles.postAndAttContainer}>
                                                    <View style={{
                                                        flex: 1, paddingLeft: 7,
                                                        paddingRight: 10
                                                    }}>
                                                        <Text style={styles.postBody}>{item.text}</Text>
                                                    </View>

                                                    <View style={styles.postAtt}>
                                                        <Text style={styles.postTime}>
                                                            <Icon name="clock-o" color="#707070" size={18} /> {Moment(item.date).fromNow(true)}</Text>
                                                        <TouchableOpacity style={styles.likesView}><Text ><Icon name="heart" color="#707070" size={18} /> {item.likecounter} </Text></TouchableOpacity>
                                                        <TouchableOpacity style={styles.commentButton}><Text ><Icon name="comments" color="#707070" size={18} /> {item.commentCounter}</Text></TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        ))
                    }

                </ScrollView>
                {/* <Button title="Tab Navigation" onPress={this.onButtonPress} /> */}

                <TouchableOpacity
                    style={styles.fab} onPress={this.renderPostView}
                    onPress={() => this.props.navigation.navigate('NewPostActivity')}>

                    <Iconn name="dice"
                        size={20} color="#FFFFFF" />
                </TouchableOpacity>

                {/* {isVisible === false &&
                    this.state.renderPost === false ?
                    <TouchableOpacity
                        style={styles.fab} onPress={this.renderPostView}>

                        <Iconn name="dice"
                            size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.fab} onPress={this.renderPostView}>

                        <Iconn name="dice"
                            size={20} color="#FFFFFF" />
                    </TouchableOpacity> :
                    <PoseGroup >
                        <View key="shade" style={styles.postWidget}>
                            <Text key="shade">Text Counter can be here</Text>
                            <TouchableOpacity key="shade" style={styles.widgetCancel}
                            >

                                <Icon name="paper-plane"
                                    size={20} color="#01a699" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.fabText} key="shade">
                            <TextInput key="shade"
                                placeholder="drop two odds for boys"
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.postText}
                            />

                            <TouchableOpacity key="shade"
                                style={styles.fabSend}>

                                <Icon name="paper-plane"
                                    size={20} color="#01a699" />
                            </TouchableOpacity>
                        </View>
                    </PoseGroup>
                } */}


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
        width: "65%",
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
        color: '#707070',
        marginLeft: 120,
        marginRight: 20,
        textAlign: 'left',
        paddingRight: 20,
        paddingLeft: 180


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
        // marginLeft: 20,
        // flexGrow:1,
        // width: "100%",
        // flexWrap: 'wrap'
        paddingLeft: 20,
        paddingRight: 10
    }
})

const mapStateToProps = state => ({
    auth: state.auth,
    post: state.post
})
export default connect(mapStateToProps, { getPersonalPost, getCurrent })(Timeline);