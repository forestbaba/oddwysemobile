import React from 'react'
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import AntIcon from 'react-native-vector-icons/AntDesign'
import TextField from '../common/TextField'
import CircularButto from '../common/circularButton'
import CircularButton from '../common/circularButton';


class ChangeEmail extends React.Component {
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

                <TextField placeholder="New Email" />
                <CircularButton buttonTitle="Change Email" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
})




export default ChangeEmail;