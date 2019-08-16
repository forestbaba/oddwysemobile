import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class NewPostActivity extends React.Component {
    constructor() {
        super();
        this.maxLength = 100;

        this.state = {
            textLength: 0,
        };
    }
    onChangeText(text) {
        this.setState({
            textLength: this.maxLength - text.length
        });
    }
    render() {
        return (
            <View style={styles.parentContainer}>
                <View style={styles.firstContainer}>
                    <TouchableOpacity>
                        <Icon name="close" size={20} color="red"
                            style={styles.closeIcon}
                            onPress={() => this.props.navigation.goBack(null)}/></TouchableOpacity>

                    <Text
                        style={styles.textCounter}> {this.state.textLength}/150</Text>
                    <TouchableOpacity
                        style={styles.postButton}>
                        <Text style={styles.postButtonText}>Post</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Drop two odds please"
                    underlineColorAndroid='transparent'
                    multiline={true}
                    style={styles.textInput}
                    maxLength={150}
                    onChangeText={this.onChangeText.bind(this)}
                />

            </View>
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
        padding: 10
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
})
export default NewPostActivity