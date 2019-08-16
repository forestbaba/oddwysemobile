import React from 'react'
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import AntIcon from 'react-native-vector-icons/AntDesign'


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: '',
            color: "gray"

        };
    }
   
    render() {
        return (
            <View>
                <View style={styles.passwordCOntainer}>
                    <TextInput
                        style={styles.TextInputStyleClass}
                        placeholderTextColor="gray"
                        placeholder={this.props.placeholder}
                        onChangeText={(searchWord) => this.setState({ searchWord })
                        }
                    />
                    <TouchableOpacity
                        onPress={this.toggleSwitch} style={styles.searchIcon}>
                        <AntIcon name="search1" size={25} color={this.state.color} />
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
        // borderWidth: 1,
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
    searchIcon: {
        alignSelf: 'center',
        marginTop: 39,
        marginLeft: -93
    }
})




export default SearchBar;