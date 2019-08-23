import React, { Fragment, Component } from 'react';
import { signUp } from '../../redux/action/authAction'
import { connect } from 'react-redux'
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
import PasswordFIeld from '../common/PasswordField'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Snackbar, { showSnackBar } from '@prince8verma/react-native-snackbar';
import SnackBar from 'react-native-snackbar-component'
import Dialog from "react-native-dialog";



class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            username: '',
            email: '',
            name: '',
            password: '',
            mobile_no: '',

            nameError: false,
            usernameError: false,
            emailError: false,
            passwordError: false,
            mobile_noError: false,
            isValidEmail: false



        }


    }

    static navigationOptions = {
        title: "Signup",
        headerStyle: {
            backgroundColor: "#FFFFFF"
        }
    };

    componentDidMount() {
        this.props.signUp("Things to watch");
    }
    componentWillReceiveProps(nextProps) {
        console.log('Inside receive props')
        console.log('-------------', nextProps.errors.error)
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })

        }
        console.log('error is', this.state.errors)
        showSnackBar({
            message: this.state.errors.error,
            position: 'bottom',
            confirmText: 'OK',
            backgroundColor: "#323232",
            duration: 1000,

        });

    }
    handleSignUp() {

        // showSnackBar({
        //     message: "this.state.errors.error",
        //     position: 'bottom',
        //     confirmText: 'OK',
        //     backgroundColor: "#323232",
        //     duration: 1000,

        // });




        this.state.name === undefined || this.state.name === '' ? this.setState({ nameError: true }) : this.setState({ nameError: false })
        this.state.email === undefined || this.state.email === '' ? this.setState({ emailError: true }) : this.setState({ emailError: false })
        this.state.mobile_no === undefined || this.state.mobile_no === '' ? this.setState({ mobile_noError: true }) : this.setState({ mobile_noError: false })
        this.state.password === undefined || this.state.password === '' ? this.setState({ passwordError: true }) : this.setState({ passwordError: false })
        this.state.username === undefined || this.state.username === '' ? this.setState({ usernameError: true }) : this.setState({ usernameError: false })
        this.state.isValidEmail === false ? this.setState({ isValidEmail: false }) : this.setState({ emailError: true })



        if (this.state.nameError === true || this.state.emailError === true ||
            this.state.mobile_noError === true || this.state.passwordError === true || this.state.usernameError === true) {
            showSnackBar({
                message: "Please fill all the fields highlighted",
                position: 'bottom',
                confirmText: 'OK',
                backgroundColor: "#323232",
                duration: 1000,
                // onConfirm: () => {
                //     alert('hi')
                // }
            });
            // } else if (this.state.isValidEmail === false) {
            //     showSnackBar({
            //         message: "Please provide a valid email",
            //         position: 'bottom',
            //         confirmText: 'OK',
            //         backgroundColor: "#323232",
            //         duration: 2000,
            //         // onConfirm: () => {
            //         //     alert('hi')
            //         // }
            //     });
        } else {

            const newUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                mobile_no: this.state.mobile_no
            };
            this.props.navigation.navigate('Login')

            // console.warn(newUser)
            this.props.signUp(newUser)
            if (this.state.errors === null) {
                this.props.navigation.navigate('Login')
            }

        }


    }
    validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({ isValidEmail: false })
        }
        else {
            this.setState({ isValidEmail: true })
        }
        return isValidEmail
    }

    render() {
        const { error } = this.state;
        console.log('The value of error im saying', error)

        return (
            <View>

                <View style={styles.viewStyle}>

                    <ScrollView keyboardShouldPersistTaps={true}>


                        <Text style={styles.letsLogin}>Let's Start from sign up...</Text>

                        <View style={styles.cardviewStyle}>
                            <CardView
                                cardElevation={2}
                                cardMaxElevation={2}
                                cornerRadius={15}>
                                <View style={styles.inputAndIcons}>
                                    <TextInput
                                        placeholder="username"
                                        underlineColorAndroid='transparent'
                                        onChangeText={(uname) => this.setState({ username: uname })}
                                        value={this.state.username}
                                        style={styles.TextInputStyleClass}
                                    />
                                    {
                                        this.state.usernameError === true ?
                                            < EntypoIcon name="info-with-circle" size={20}
                                                color="red" style={styles.errorIconStyle}
                                            /> : null}
                                </View>


                                <View style={styles.inputAndIcons}>
                                    <TextInput
                                        placeholder="Name (firstname and lastname)"
                                        underlineColorAndroid='transparent'
                                        ref={(el) => { this.name = el; }}
                                        value={this.state.name}
                                        onChangeText={(name) => this.setState({ name })}
                                        style={styles.TextInputStyleClass} />
                                    {
                                        this.state.nameError === true ?
                                            <EntypoIcon name="info-with-circle" size={20} color="red"
                                                style={styles.errorIconStyle}
                                            />
                                            : null
                                    }

                                </View>

                                <View style={styles.inputAndIcons}>

                                    <TextInput
                                        placeholder="email"
                                        underlineColorAndroid='transparent'
                                        ref={(el) => { this.email = el; }}
                                        value={this.state.email}
                                        onChangeText={(email) => this.setState({ email })}
                                        style={styles.TextInputStyleClass} />
                                    {this.state.emailError === true ?
                                        <EntypoIcon name="info-with-circle" size={20} color="red" style={styles.errorIconStyle} /> : null}
                                </View>
                                <View style={styles.inputAndIcons}>

                                    <TextInput
                                        placeholder="mobile number"
                                        underlineColorAndroid='transparent'
                                        ref={(el) => { this.mobile_no = el; }}
                                        value={this.state.mobile_no}
                                        onChangeText={(mobile_no) => this.setState({ mobile_no })}
                                        style={styles.TextInputStyleClass} />
                                    {this.state.mobile_noError === true ?
                                        <EntypoIcon name="info-with-circle" size={20} color="red" style={styles.errorIconStyle} />
                                        : null}

                                </View>


                                <View >
                                    <PasswordFIeld placeholder="password"
                                        ref={(el) => { this.password = el; }}
                                        onChangeText={(value) => this.setState({ password: value })}
                                        value={this.state.password}
                                    />


                                    {
                                        this.state.passwordError === true ?
                                            <EntypoIcon name="info-with-circle" size={20} color="red" style={styles.errorIconStyle} />
                                            : null
                                    }

                                </View>
                                <TouchableOpacity style={styles.loginButton} onPress={this.handleSignUp.bind(this)}>

                                    <Text style={styles.loginButtonText}>
                                        Sign Up
                                  </Text>
                                </TouchableOpacity>


                            </CardView>

                        </View>
                    </ScrollView>
                    <SnackBar
                        visible={true} textMessage="Hello There!"
                        actionHandler={() => { console.log("snackbar button clicked!") }}
                        position="bottom"
                        actionText="let's go"
                    />
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
                <Snackbar id={"root_app"} />

                <View>
                    {/* <Dialog.Container>
                        <Dialog.Title>Account delete</Dialog.Title>
                        <Dialog.Description>
                            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
                        <Dialog.Button label="Cancel" />
                        <Dialog.Button label="Delete" />
                    </Dialog.Container> */}
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
        marginTop: 20,
        flex: 1,
        paddingRight: 25,
        paddingLeft: 25
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
        marginTop: 20,
        marginBottom: 70,
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
        color: '#04823A',
        fontWeight: "bold",
        fontSize: 20
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
    },
    inputAndIcons: {
        flexDirection: 'row',
        flex: 1,
    },
    errorIconStyle: {
        left: 10,
        marginLeft: 30,
        marginTop: 30,
        position: "absolute"
    }
});


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors

});

export default connect(mapStateToProps, { signUp })(Signup);
