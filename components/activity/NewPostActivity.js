import React from 'react'
import { View, Text, StyleSheet, Picker, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import GamePost from '../common/GamePost'
import SnackBar from "../common/SnackBar";
import CreateGame from '../common/CreateGame'
import { ScrollView } from 'react-native-gesture-handler';
import { createPost } from '../../redux/action/postAction'
import Snackbar, { showSnackBar } from '@prince8verma/react-native-snackbar';
import { connect } from 'react-redux'

class NewPostActivity extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: {},
            maxLength:100,

            textLength: 0,
            text: '',
            value: '',
            gameType: '',
            vendorType: '',
            teamA: '',
            teamB: '',
            inputCount: 0,
            otherVendornameFieldIsVisible: false,
            nameArr: [
                // { "count": 1, name: "jame", vendor: "surebet" },
                // { "count": 2, name: "wale", vendor: "bet9ja" },
                // { "count": 3, name: "kemi", vendor: "wakabet" }
            ],
            gameCreateOptionIsVisible: false,
            isTicketSelected: false,
            isClubSelected: false,
            isCustomSelected: false,
            showAttackedGame: true,
            hideBallOptionIcon: false,
            clubCountry: ['Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus'],
            services: ['one', 'two', 'three', 'four', 'five']

        };
        this.removeElement = this.removeElement.bind(this)

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })

        }
        if (nextProps.post) {
            console.log('Post creating is successful: ', nextProps.post.post)
            showSnackBar({
            message: nextProps.post.post.message,
            position: 'bottom',
            confirmText: 'OK',
            backgroundColor: "#323232",
            duration: 1000,
            // onConfirm: () => {
            //     alert('hi')
            // }
        });
        }
      
       

    }

    onChangeText(text) {
        this.setState({
            textLength: this.state.maxLength - text.length, text: text
        });
    }
    DisplaySnackBar = (text) => {
        //this.refs.ReactNativeSnackBar.ShowSnackBarFunction(text);
    };

    showGameOption = () => {
        this.setState({
            gameCreateOptionIsVisible: !this.state.gameCreateOptionIsVisible,
            hideBallOptionIcon: !this.setState.hideBallOptionIcon
        })
        console.warn('Value of hideballoption: ', this.state.hideBallOptionIcon)
    }


    pickerValueChange = value => {
        if (value) this.setState({ value })
        console.log(value)
    }
    showTicket = () => {
        this.setState({
            isTicketSelected: true,
            isClubSelected: false,
            isCustomSelected: false
        })
        this.showGameOption();
    }
    showClub = () => {
        this.setState({
            isTicketSelected: false,
            isClubSelected: true,
            isCustomSelected: false

        })
        this.showGameOption();
    }
    showCustom = () => {
        // console.warn('Working')
        this.setState({
            isClubSelected: false,
            isTicketSelected: false,
            isCustomSelected: true
        })
        this.showGameOption();
    }
    addNewInput = () => {
        console.log('New component added')
        console.log('Count: ', this.state.inputCount)
        //console.warn(this.state.gameInpute)

        if (this.state.gameInpute === "" || this.state.gameInpute === undefined) {
            // showSnackBar({
            //     message: "You can not add empty field",
            //     position: 'bottom',
            //     confirmText: 'OK',
            //     backgroundColor: "#323232",
            //     duration: 1000,
            //     // onConfirm: () => {
            //     //     alert('hi')
            //     // }
            // });
        } else if (this.state.vendorType.toString() === "select" ||
            this.state.vendorType.toString() === "" || this.state.vendorType.toString() === undefined
        ) {
            showSnackBar({
                message: "Please select vendor",
                position: 'bottom',
                confirmText: 'OK',
                backgroundColor: "#323232",
                duration: 1000,
                // onConfirm: () => {
                //     alert('hi')
                // }
            });
        }
        else {
            this.setState({
                inputCount: this.state.inputCount + 1,
                nameArr: this.state.nameArr.concat({
                    name: this.state.gameInpute,
                    count: this.state.inputCount + 1,
                    vendor: this.state.vendorType
                }),
                gameInpute: "", count: 0
            })
            this.textInput.clear()
        }

    }

    createCustomPost = () => {
        // console.log(this.state.gameInpute, "auth", this.props.auth)
        this.props.createPost({text: this.state.text})
    }

    renderSelectedView = () => {

        let serviceItems = this.state.services.map((s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        let clubCountryItems = this.state.clubCountry.map((s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });

        if (this.state.isClubSelected === true) {
            return <View style={styles.clubSelectContainer}>
                <View style={styles.vendorSelectorWrapper}>
                    <Text style={styles.selectVendorPrompt}>Club</Text>
                    <View style={styles.teamASelectContainer}>
                        <Picker
                            selectedValue={this.state.teamA}
                            style={styles.teamSelector}

                            onValueChange={(itemValue, itemIndex) => {
                                console.warn('The picker value: ', itemValue)
                                this.setState({ teamA: itemValue })

                                // if (itemValue.toString() === "others") {
                                //     this.setState({ otherVendornameFieldIsVisible: true })

                                // } else {
                                //     this.setState({ otherVendornameFieldIsVisible: false })

                                // }
                            }}
                            mode="dropdown">
                            {this.state.clubCountryItems}



                        </Picker>
                        <Picker
                            selectedValue={this.state.teamA}
                            style={styles.teamSelector}

                            onValueChange={(itemValue, itemIndex) => {
                                console.warn('The picker value: ', itemValue)
                                this.setState({ teamA: itemValue })

                                // if (itemValue.toString() === "others") {
                                //     this.setState({ otherVendornameFieldIsVisible: true })

                                // } else {
                                //     this.setState({ otherVendornameFieldIsVisible: false })

                                // }
                            }}
                            mode="dropdown">
                            {serviceItems}



                        </Picker>
                    </View>

                </View>

                <Text>Vs</Text>

                <View style={styles.vendorSelectorWrapper}>
                    <Text style={styles.selectVendorPrompt}>Club</Text>
                    <View style={styles.teamASelectContainer}>
                        <Picker
                            selectedValue={this.state.teamA}
                            style={styles.teamSelector}

                            onValueChange={(itemValue, itemIndex) => {
                                console.warn('The picker value: ', itemValue)
                                this.setState({ teamA: itemValue })

                                // if (itemValue.toString() === "others") {
                                //     this.setState({ otherVendornameFieldIsVisible: true })

                                // } else {
                                //     this.setState({ otherVendornameFieldIsVisible: false })

                                // }
                            }}
                            mode="dropdown">
                            {clubCountryItems}



                        </Picker>
                        <Picker
                            selectedValue={this.state.teamA}
                            style={styles.teamSelector}

                            onValueChange={(itemValue, itemIndex) => {
                                console.warn('The picker value: ', itemValue)
                                this.setState({ teamA: itemValue })

                                // if (itemValue.toString() === "others") {
                                //     this.setState({ otherVendornameFieldIsVisible: true })

                                // } else {
                                //     this.setState({ otherVendornameFieldIsVisible: false })

                                // }
                            }}
                            mode="dropdown">
                            {serviceItems}

                        </Picker>
                    </View>
                </View>
                <TouchableOpacity onPress={this.addNewInput}>
                    <Icon name="plus" size={25} />
                </TouchableOpacity>
            </View>

        } else if (this.state.isTicketSelected === true) {
            return (
                <View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TextInput
                            placeholder="Drop two odds please"
                            underlineColorAndroid='transparent'
                            multiline={true}
                            style={styles.textInput}
                            maxLength={30}
                            ref={input => { this.textInput = input }}
                            onChangeText={this.onChangeText.bind(this)
                            }
                        />

                        <View style={styles.vendorSelectorWrapper}>
                            <Text style={styles.selectVendorPrompt}>Vendor</Text>

                            <Picker
                                selectedValue={this.state.vendorType}
                                style={styles.vendroSelector}

                                onValueChange={(itemValue, itemIndex) => {
                                    console.log('The picker value: ', itemValue)
                                    this.setState({ vendorType: itemValue })

                                    if (itemValue.toString() === "others") {
                                        this.setState({ otherVendornameFieldIsVisible: true })

                                    } else {
                                        this.setState({ otherVendornameFieldIsVisible: false })

                                    }
                                }}
                                mode="dropdown">
                                <Picker.Item label="Select Vendor" value="select" />
                                <Picker.Item label="Bet Naija" value="betnaija" />
                                <Picker.Item label="Nairabet" value="nairabet" />
                                <Picker.Item label="1960 bet" value="1960bet" />
                                <Picker.Item label="Waka bet" value="wakabet" />
                                <Picker.Item label="Surebet" value="surebet" />
                                <Picker.Item label="Others" value="others" />


                            </Picker>
                        </View>
                        {
                            this.state.otherVendornameFieldIsVisible === true ? <TextInput
                                placeholder="Vendor name"
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.textInput}
                                maxLength={150}
                                ref={input => { this.textInput = input }}
                                onChangeText={this.onChangeText.bind(this)
                                }
                            /> : null
                        }


                        <TouchableOpacity onPress={this.addNewInput}>
                            <Icon name="plus" size={25} />
                        </TouchableOpacity>

                    </View>

                    {/* <Text style={styles.textCounter}> {this.state.textLength}/150</Text> */}

                </View>)

        } else if (this.state.isCustomSelected === true) {
            return (
                <View>
                    <View>
                        <TextInput
                            placeholder="Drop two odds please"
                            underlineColorAndroid='transparent'
                            multiline={true}
                            style={styles.textInput}
                            maxLength={150}
                            ref={input => { this.textInput = input }}
                            onChangeText={this.onChangeText.bind(this)
                            }
                        />
                        {
                            this.state.otherVendornameFieldIsVisible === true ? <TextInput
                                placeholder="Vendor name"
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.textInput}
                                maxLength={150}
                                ref={input => { this.textInput = input }}
                                onChangeText={this.onChangeText.bind(this)
                                }
                            /> : null
                        }

                    </View>

                    <Text
                        style={styles.textCounter}> {this.state.textLength}/150</Text>


                    <TouchableOpacity style={styles.postButtonCustom}
                        // disabled={this.state.disabled}
                        // onPress={() => this.props.navigation.navigate('TabHolder')}>
                        onPress={
                            this.createCustomPost.bind(this)
                        }>
                        <Text style={styles.postButtonTextCustom}>Post</Text>
                    </TouchableOpacity>
                    <Snackbar id={"root_app"} />
                </View>
            )


        }
    }


    onPress = () => {
        showSnackBar({
            message: "Hello World",
            position: 'top',
            confirmText: 'OK',
            backgroundColor: "#323232",
            duration: 1000,
            // onConfirm: () => {
            //     alert('hi')
            // }
        });
    };


    renderView = (count) => {
        if (count > 0) {
            return <Text>` Item count ${count}`</Text>
        }
    }
    removeElement = (index1) => {
        let arrayElement = this.state.nameArr;

        console.warn('Remove element clicked: ', arrayElement)
        let index = arrayElement.indexOf(index1)
        if (index > -1) {
            arrayElement.splice(index1, 1)
        }
        console.warn('Remove element clicked: ', index1)
    }

    render() {

        let serviceItems = this.state.services.map((s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        let clubCountryItems = this.state.clubCountry.map((s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });

        return (
            <View style={styles.parentContainer}>
                {/* <Snackbar id={"root_app"} /> */}
                <View style={{ flex: 1, backgroundColor: 'transparent' }}>



                    <View style={{ width: '100%', backgroundColor: 'transparent', flexDirection: 'row', marginLeft: 8, marginTop: 10 }}>
                        <TouchableOpacity onPress={this.showGameOption}>
                            <Icon name="soccer-ball-o" size={25} />
                        </TouchableOpacity>
                        <Text style={{ color: 'gray', marginLeft: 30 }}>Tap the ball to begin</Text>
                    </View>

                    {this.renderSelectedView()}

                    <View style={styles.firstContainer}>

                        {/* <TouchableOpacity>
                                <Icon name="close" size={20} color="red"
                                    style={styles.closeIcon}
                                    onPress={() => this.props.navigation.goBack(null)} /></TouchableOpacity>



                            <Picker
                                selectedValue={this.state.value}
                                style={{ height: 50, width: 150, }}

                                // onValueChange={(itemValue, itemIndex) => this.setState({ menu: itemValue })}
                                onValueChange={(itemValue, itemIndex) => {
                                    console.log('The picker value: ', itemValue)
                                    this.setState({ value: itemValue })
                                }}
                                mode="dropdown">
                                <Picker.Item label="Select" value="free" />
                                <Picker.Item label="Team" value="paid" />
                                <Picker.Item label="Ticket" value="free" />
                                <Picker.Item label="Custom" value="free" />

                            </Picker> */}

                        {/* <TouchableOpacity
                        style={styles.postButton}>
                        <Text style={styles.postButtonText}>Post</Text>
                    </TouchableOpacity> */}
                    </View>

                    {/* <Picker
                            selectedValue={this.state.gameType}
                            style={{ height: 50, width: 150, }}

                            onValueChange={(itemValue, itemIndex) => {
                                console.log('The picker value: ', itemValue)
                                this.setState({ gameType: itemValue })
                            }}
                            mode="dropdown">
                            <Picker.Item label="Select" value="free" />
                            <Picker.Item label="Ticket" value="ticket" />
                            <Picker.Item label="Custom" value="custom" />

                        </Picker> */}

                    {
                        this.state.isTicketSelected === true || this.state.isClubSelected === true ?
                            <View style={styles.gameContainerParent}>
                                {
                                    this.state.nameArr.map((index, item) => {
                                        return (
                                            <View style={styles.gameItemContainer}>
                                                <Text style={styles.gameItemTitle}>{index.count} </Text>
                                                <Text style={styles.gameItemTitle}>{index.name}</Text>
                                                <Text style={styles.gameItemTitle}>{index.vendor}</Text>
                                                <TouchableOpacity><Icon name='close' size={20} color="red" onPress={() => this.removeElement(index.count)} /></TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </View> : null
                    }





                    {/* <Snackbar id={"root_app"} /> */}


                    {/* <SnackBar ref="ReactNativeSnackBar" /> */}



                    {
                        this.state.gameCreateOptionIsVisible ?
                            // <ScrollView style={styles.parentScrollView}>

                            <View style={styles.dropType}>

                                <CreateGame hideMe={this.showGameOption}
                                    showTicket={this.showTicket}
                                    showClub={this.showClub}
                                    showCustom={this.showCustom} />
                            </View>
                            // </ScrollView >
                            : null
                    }

                    {/* <View style={{ marginTop: 0 }}> */}
                    <Snackbar id={"root_app"} />

                    {/* </View> */}

                </View>


            </View >

        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DDDCDC',
        minHeight: 50,
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    textCounter: {
        marginLeft: 10,
        marginRight: 10,
    },
    closeIcon: {
        marginLeft: 10,
    },
    firstContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#EBE8E8',
        padding: 20

    },

    parentContainer: {
        backgroundColor: '#EBE8E8',
        padding: 10,
        justifyContent: 'space-between',
        flex: 1
    },
    postButtonCustom: {
        textAlign: 'center',
        height: 30,
        borderColor: '#A9A9A9',
        borderRadius: 20,
        backgroundColor: "#04823A",
        width: 50
        // marginLeft: 35,
        // marginRight: 25,
        // marginTop: 20,
        // marginBottom: 10,
    }, postButtonTextCustom: {
        textAlign: 'center',
        width: '100%',
        color: '#FFFFFF',
        marginTop: 5
    },
    gameItemContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 20,


    },
    gameContainerParent: {
        // flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    selectVendorPrompt: {
        marginLeft: 8,
        fontSize: 12,
        color: '#A9A9A9',
        marginTop: 5
    },
    vendroSelector: {
        height: 50,
        width: 250,
        marginTop: -15,
        fontSize: 15
    },
    teamSelector: {
        height: 50,
        width: 150,
        marginTop: -15,
        fontSize: 15
    },
    vendorSelectorWrapper: {

        borderWidth: 0.5,
        padding: 5,
        margin: 10,
        borderColor: '#A9A9A9',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'

    },
    gameItemTitle: {
        color: "black",
        textAlign: 'left',
        flex: 1
    },
    dropType: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position: 'absolute',
        marginRight: -50,


        //  marginTop: 150
    },
    parentScrollView: {
        flex: 1
    },
    teamASelectContainer: {
        flexDirection: 'row'
    },
    clubSelectContainer: {
        justifyContent: "center",
        alignItems: 'center'
    },
    postButton: {
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
    postButtonText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 20
    },
})
const mapStateToProps = state => ({
    post: state.post,
    auth: state.auth
})
export default connect(mapStateToProps, { createPost })(NewPostActivity)