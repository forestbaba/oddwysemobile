import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, TouchableOpacity,
    StatusBar, TextInput, Image, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux'
import CardView from 'react-native-cardview'
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import PasswordFIeld from '../common/PasswordField'
import { login } from '../../redux/action/authAction'
import { Input } from 'native-base'
import * as Animatable from 'react-native-animatable';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            disabled: true,
            isLoading: false,
            error: {},
            errorMessage: '',
            loginerror: false
        };
    }
    static navigationOptions = {
        title: 'Login',
        // headerStyle: {
        //     backgroundColor: '#03A9F4',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },

    };

    componentDidMount() {
        console.log('///////////////////////////', this.props.auth)
    }

    componentWillReceiveProps(nextProps) {
        console.log('props type: ', nextProps.errors.error.message)

        if (nextProps.errors.iserror === true) {
            console.log('++++++++++++++++ ', nextProps.errors.iserror)
            this.setState({
                isLoading: !this.state.isLoading,
                error: nextProps.errors,
                loginerror: true,
                errorMessage: nextProps.errors.error.message

            })
        } else if (nextProps.auth.isAuthenticated === true){

            this.props.navigation.navigate('TabHolder')
        }

        // console.log('Login nextprops: ', nextProps.auth)
        // if (nextProps.errors) {

        // }
        // else
        // {
        // }
        //     this.props.navigation.navigate('TabHolder')
        console.log('%%%%%%%%%%%%%%  ', JSON.stringify(this.state.error))

    }
    handleLogin() {
        const user = {
            emailorusername: this.state.username,
            password: this.state.password
        }

        this.setState({ isLoading: true })

        this.props.login(user)
        console.log('The Auth value: ', this.props.errors.error)
    }
    changeLoginError(){
        this.setState({ loginerror: false })
        console.log('Login error State has change: ', this.state.loginerror)
    }
    render() {
        return (
            <View style={styles.viewStyle}>
                <ScrollView keyboardShouldPersistTaps={true} style={{ marginTop: 50 }}>
                    <Text style={styles.letsLogin}>Let's log you in...</Text>

                    <View style={styles.cardviewStyle}>
                        <CardView
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={15}
                        >
                            <Input
                                placeholder="username"
                                underlineColorAndroid='transparent'
                                onChangeText={(uname) => this.setState({ username: uname })}
                                value={this.state.username}
                                style={styles.TextInputStyleClass}
                            />

                            <PasswordFIeld placeholder="password"
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password} />

                            <View style={styles.loginButtonAndIndicatorContainer}>
                                <TouchableOpacity style={styles.loginButton}
                                    // disabled={this.state.disabled}
                                    // onPress={() => this.props.navigation.navigate('TabHolder')}>
                                    onPress={
                                        this.handleLogin.bind(this)
                                    }>
                                    <View>
                                        {
                                            this.state.isLoading === true ?
                                                <ActivityIndicator size="large" color="#FFFFFF" style={{ marginTop: 3 }} visible={false} />
                                                : <Text style={styles.loginButtonText}>Login</Text>

                                        }

                                    </View>

                                </TouchableOpacity>


                            </View>

                            <View style={styles.socialsContainer}>
                                <TouchableOpacity style={{ marginRight: 20 }}>
                                    <FIcon name="facebook" size={35} color="green" />
                                </TouchableOpacity>
                                <Text>Login with socials</Text>
                                <TouchableOpacity style={{ marginLeft: 20 }}>
                                    <FIcon name="google" size={35} color="green" />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.forgotPasswordButton}
                                onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                <Text style={styles.forgotPasswordButtonText}>Forgot Password ?</Text>
                            </TouchableOpacity>

                        </CardView>

                    </View>
                </ScrollView>

                <CardView
                    cardMaxElevation={2}
                    cornerRadius={15}
                    style={styles.signupCard}>
                    <View style={styles.signupContainer}>
                        <Text style={styles.signUpQuestionText}>Don't have an account ?</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Signup')}
                        >
                            <Text style={styles.signupButtonText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </CardView>

                {
                    this.state.loginerror === true ?

                        <Animatable.View
                            animation="bounceInUp" duration={1000} easing="ease-out"
                            onAnimationEnd={() => {setInterval (this.changeLoginError.bind(this), 80000)}}
                            // onTransitionEnd={setInterval(console.log('!!!!!!!!!!!!!!!!!!!!!!'), 7000)}
                            style={{
                                alignItems: 'center',
                                alignContent: 'center',
                                backgroundColor: 'red',
                                flex: 1,
                                alignItems: "center",
                                justifyContent: 'center',
                                bottom: 0,
                                position: 'absolute',
                                height: 60,
                                elevation: 5,
                                width: '100%'
                            }}>
                            <Animatable.Text style={{ fontSize: 18, fontStyle: "bold", color: 'white', padding: 5 }}>{this.state.errorMessage}</Animatable.Text>
                        </Animatable.View> : null
                }


            </View>

        )
    }
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
        alignSelf: 'center',

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
        flex: 1
    },
    loginButtonText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 20
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
        color: '#04823A',
        fontWeight: "bold",
        fontSize: 15
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
        color: '#04823A',
        fontWeight: "bold",
        fontSize: 20
    },
    signupCard: {
        // marginLeft: 25,
        marginRight: 25,
        height: 60,
        // position: 'absolute',
        bottom: 0,
        width: "100%",
        marginBottom: -10

    },
    viewStyle: {
        //height: "100%"
        flex: 1,
        alignContent: "center",
        justifyContent: 'center'
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
    },
    loginButtonAndIndicatorContainer: {
        flexDirection: 'row',
        flex: 1
    },
    indicator: {
        position: "absolute",
        right: 25,
        marginTop: 23,
        marginRight: 15

    }
});

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { login })(Login);