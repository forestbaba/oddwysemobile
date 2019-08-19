import React from 'react'
import {View, Text, TouchableOpacity, TextInput, Picker, StyleSheet} from 'react-native'


export default CreateTicket = () => {
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

            <Text
                style={styles.textCounter}> {this.state.textLength}/150</Text>

        </View>
    )
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
    postButton: {
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
    }, postButtonText: {
        textAlign: 'center',
        width: '100%',
        color: '#FFFFFF',
        marginTop: 5
    },
    gameItemContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 20
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
    vendorSelectorWrapper: {

        borderWidth: 0.5,
        padding: 5,
        margin: 10,
        borderColor: '#A9A9A9',
        height: 50

    },
    gameItemTitle: {
        color: "red",
        textAlign: 'left',
        flex: 1
    },
    dropType: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position: 'absolute',
        marginRight: -50

        //  marginTop: 150
    },
})