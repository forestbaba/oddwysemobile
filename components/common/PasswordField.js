import React from 'react'
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import AntIcon from 'react-native-vector-icons/AntDesign'


class PasswordField extends React.Component {
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
        this.state.color === "gray" ? this.setState({ color: 'black' }) : this.setState({ color: 'gray' })
    }
    chnageIconColor() {

    }
    render() {
        return (
            <View>
                <View style={styles.passwordCOntainer}>
                    <TextInput
                        style={styles.TextInputStyleClass}
                        placeholderTextColor="gray"
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.state.showPassword}
                        onChangeText={(password) => this.setState({ password })
                        }
                    />
                    <TouchableOpacity
                        onPress={this.toggleSwitch} style={styles.eyeIcon}>
                        <AntIcon name="eye" size={25} color={this.state.color} />
                    </TouchableOpacity>
                </View>

                

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




export default PasswordField;