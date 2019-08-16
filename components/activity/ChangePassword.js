import React from 'react'
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import AntIcon from 'react-native-vector-icons/AntDesign'
import PasswordField from '../common/PasswordField'
import CircularButto from '../common/circularButton'
import CircularButton from '../common/circularButton';


class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            password: '',
            showPassword: true,
            color: "gray"

        };
    }
    toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
        //this.setState({this.state.color==='blue' ?})
        this.state.color === "gray" ? this.setState({ color: 'black' }) : this.setState({ color: 'gray' })
    }
    chnageIconColor() {

    }
    render() {
        return (
            <View>

                <PasswordField placeholder="Old Password"/>
                <PasswordField placeholder="New Password" />
                <CircularButton buttonTitle="Change Password"/>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    TextInputStyleClass: {
        textAlign: 'center',
        height: 45,
        width: "100%",
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginLeft: 35,
        marginRight: 55,
        marginTop: 40,
        paddingLeft: 10,
        paddingRight: 40
    },
    componAtt: {
        textAlign: 'center',
        height: 45,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginLeft: 35,
        marginRight: 25,
        marginTop: 40,
        paddingLeft: 10,
        paddingRight: 10
    },
    passwordCOntainer: {
        flexDirection: 'row',
        alignItems: "center",
        width: '80%'

    },
    eyeIcon: {
        alignSelf: 'center',
        marginTop: 39,
        marginLeft: -83
    }
})




export default ChangePassword;