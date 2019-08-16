import React from 'react'
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'


class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            showPassword: true,
            color: "gray"

        };
    }

    render() {
        return (
            <View>
                <View style={styles.textContainer}>
                    <TextInput
                        style={styles.TextInputStyleClass}
                        placeholderTextColor="gray"
                        placeholder={this.props.placeholder}
                        onChangeText={(text) => this.setState({ text })
                        }
                    />

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
    textContainer: {
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




export default TextField;