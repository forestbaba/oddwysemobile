import React from 'react'
import UserCard from '../common/UserCard'
import UserCardUnfollow from '../common/UserCardUnfollow'
import { connect } from 'react-redux'
import { View, Text, ScrollView, AsyncStorage } from 'react-native'
import { fetchAllUser, followUser } from '../../redux/action/userAction'
class SearchPeople extends React.Component {

    constructor(props) {
        super(props)

        state = {
            user: {},
            useru: {}
        }
    }

    async componentDidMount() {
        this.props.fetchAllUser();
        console.log('----------------------------------> ', this.props.auth)
        await AsyncStorage.getItem('user', (error, result) => {
            this.setState({
                user: result, useru: result
            })
        })
        const user = JSON.parse(this.state.user)
        console.log('----------------------- asyc storage', user.user.following)

        for (let i = 0; i < user.user.following.length; i++) {
           // console.log('***********************', user.user.following[i].people)

        }
    }

    followUserAction(userid) {
        //console.log('User id to follow: ', userid)
        this.props.followUser(userid)



    }
    getIn() {

        this.props.users.users.users !== undefined ?
            this.props.users.users.users.map((user, index) => {

                return (

                    <UserCard name={user.name}
                        onFollowUser={() => this.followUserAction(user._id)}
                    />
                )
            }) : <Text>Getting easy</Text>
    }
    render() {
        // let useruu;
        // AsyncStorage.getItem('user', (error, result) => {
        //     this.setState({
        //         user: result, user: result
        //     })
        // })
        const { users } = this.props.users
        //const user2 = JSON.parse(this.props.user)


        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {
                        this.props.users.users.users !== undefined ?
                            this.props.auth.fulluser.followUser.map((user, index) => {
                                //console.log('---index :', index)
                                let cx = index;
                                
                                let x1 = JSON.parse(this.state.user)

                                //console.log('77777777777:   ', "" + JSON.stringify(x1.user.following))

                                // for (let i = 0; i < x1.user.following.length; i++) {
                                
                                // if (this.props.auth.fulluser.following[index].people === undefined) {
                                //     console.log('##')
                                // } else {
                                //     console.log('*********2*******0*******', this.props.auth.fulluser.following[index].people)
                                // }
                                //        console.log('---index2 :',cx)



                                    // if (x1.user.following.length > 0) {
                                    
                                // this.props.auth.fulluser.followUser.map((u, i) => {
                                //     console.log('>>>:   ',u)
                                // })


                                                        // if (this.props.auth.fulluser.following[cx].people.toString() === user._id.toString()) {

                                                        //     return (

                                                        //         <UserCardUnfollow name={user.name}
                                                        //             onFollowUser={() => this.followUserAction(user._id)}
                                                        //         />
                                                        //     )

                                                        // } else {
                                                        //     return (

                                                        //         <UserCard name={user.name}
                                                        //             onFollowUser={() => this.followUserAction(user._id)}
                                                        //         />
                                                        //     )
                                                        // }
                                    // } else {
                                    //     return (
                                    //         <UserCard name={user.name}
                                    //             onFollowUser={() => this.followUserAction(user._id)}
                                    //         />)
                                    // }
                                //}
                                cx++;

                            }) : <Text>Getting easy</Text>
                    }
                </View>
            </ScrollView>
        )

        // {
        //     users.map((users, index) => {
        //         return (

        //         )
        //     })
        // }

    }

}

const mapStateToProps = state => ({
    users: state.users,
    auth: state.auth
})
export default connect(mapStateToProps, { fetchAllUser, followUser })(SearchPeople)