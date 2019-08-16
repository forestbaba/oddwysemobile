import React from 'react'
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import AntIcon from 'react-native-vector-icons/AntDesign'
import TextField from '../common/TextField'
import CircularButto from '../common/circularButton'
import CircularButton from '../common/circularButton';


class ChangeMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            showPassword: true,
            color: "gray"

        };
    }

    render() {
        return (
            <View>

                <TextField placeholder="input the your new mobile number" />
                <CircularButton buttonTitle="Change Mobile Number" />
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




export default ChangeMobile;