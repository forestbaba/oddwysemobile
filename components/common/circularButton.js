
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import React from 'react'

const CircularButton = (props) => {
    return(
        <View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({

    TextInputStyleClass: {
        textAlign: 'center',
        height: 45,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginLeft: 35,
        marginRight: 25,
        marginTop: 40,
    },
    passwordInput: {
        textAlign: 'center',
        height: 45,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginLeft: 35,
        marginRight: 25,
        marginTop: 20,
        marginBottom: 10,
    },
    cardviewStyle: {
        marginLeft: 25,
        marginRight: 25,
        flex: 3,
        marginTop: 20,
        marginBottom: 70,

        flexDirection: "column"
       
    },
    loginButton: {
        textAlign: 'center',
        height: 45,
        borderColor: '#A9A9A9',
        borderRadius: 20,
        backgroundColor: "#04823A",
        marginLeft: 35,
        marginRight: 25,
        marginTop: 20,
        marginBottom: 10,
    },
    loginButtonText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#FFFFFF'
    },
 
});
export default CircularButton;

