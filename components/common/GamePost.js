import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

class GamePost extends React.Component {
    constructor(props) {
        super(props)
        state = {
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
            <View>
                <TextInput
                    placeholder="Drop two odds please"
                    underlineColorAndroid='transparent'
                    multiline={true}
                    style={styles.textInput}
                    maxLength={150}
                    // onChangeText={this.onChangeText.bind(this)}
                    onChangeText={this.props.onChangeText}
                />
                <Text
                    style={styles.textCounter}> {this.state.textLength}/150</Text>
            </View>
        )
    }
}
styles = StyleSheet.create({
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
})
export default GamePost;