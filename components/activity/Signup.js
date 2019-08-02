import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, TouchableOpacity,
    StatusBar, TextInput, Image
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CardView from 'react-native-cardview'
import { StackNavigator } from 'react-navigation';
// import rsvg from 'react-native-svg'
// import Index from './app/components/login/index'


class Signup extends Component {

    static navigationOptions = {
        title: "Signup",
        headerStyle: {
            backgroundColor: "#FFFFFF"
        }
    };

    render() {
        return (
            <View>
                <View style={styles.viewStyle}>
                    <ScrollView>
                        <Text style={styles.letsLogin}>Let's Start from sign up...</Text>

                        <View style={styles.cardviewStyle}>
                            <CardView
                                cardElevation={2}
                                cardMaxElevation={2}
                                cornerRadius={15}
                            >
                                <TextInput
                                    placeholder="username"
                                    underlineColorAndroid='transparent'
                                    style={styles.TextInputStyleClass} />
                                <TextInput
                                    placeholder="email"
                                    underlineColorAndroid='transparent'
                                    style={styles.TextInputStyleClass} />

                                <TextInput
                                    placeholder="mobile number"
                                    underlineColorAndroid='transparent'
                                    style={styles.passwordInput} />
                                <TextInput
                                    placeholder="password"
                                    underlineColorAndroid='transparent'
                                    style={styles.passwordInput} />

                                <TouchableOpacity style={styles.loginButton}>

                                    <Text style={styles.loginButtonText}>
                                        Login
                                  </Text>
                                </TouchableOpacity>
                                

                            </CardView>

                        </View>
                    </ScrollView>

                    <CardView
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={15}
                        style={styles.signupCard}>
                        <View style={styles.signupContainer}>
                            <Text style={styles.signUpQuestionText}>Already have an account ?</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={styles.signupButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </CardView>
                </View>
            </View>
        );
    };
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
        marginTop:20,
        marginBottom:70,
        flex: 3,
        // flexWrap: "wrap",
        flexDirection: "column"
        // alignSelf: 'baseline'
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flex: 1,
        // margin: 10
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
    socialsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20
    },
    googleStyle: {
        marginRight: 10,
        marginLeft: 10
    },
    facebookStyle: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 40 / 2,
        overflow: "hidden",
        borderWidth: 0.5,
        borderColor: "red"

    },
    forgotPasswordButton: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,

    },
    forgotPasswordButtonText: {
        color: '#04823A'
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10
    },
    signUpQuestionText: {
        color: '#707070'
    },
    signupButtonText: {
        marginLeft: 10,
        color: '#04823A'
    },
    signupCard: {
        // marginLeft: 25,
        marginRight: 25,
        height: 60,
        position: 'absolute',
        bottom: 0,
        flex: 1,
        width: "100%",
        marginBottom: -10

    },
    viewStyle: {
        height: "100%"
    },
    letsLogin: {
        fontSize: 30,
                fontWeight: "bold",
        marginLeft: 30,
        marginRight: 20,
        marginTop: 10,
        flex: 1,
        flexWrap: 'wrap',
        color: '#04823A'
    }
});

export default Signup;
