import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import SearchBar from './SearchBar'
import { bold } from 'ansi-colors';

class SearchCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.parentContainer}>
                <View style={styles.searchContainer}>
                    <Text style={styles.textExplore}>Explore Oddwyse</Text>
                    <SearchBar placeholder={this.props.placeholder} />
                </View>

                <View>
                    <ScrollView
                        horizontal={true}>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>2 odds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>3 odds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>5 odds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>10 odds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>10 odds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>10 odds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>10 odds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.circularText}>10 odds</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: "#01a699"
    },
    searchContainer: {
        marginBottom: 35
    },
    textExplore: {
        color: 'white',
        alignSelf: "center",
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15
    },
    circularText: {
        borderRadius: 25,
        backgroundColor: 'white',
        padding: 5,
        paddingLeft: 7,
        paddingRight: 7,
        color: '#01a699',
        fontWeight: "bold",
        marginBottom: 10,
        margin: 5
    }
})
export default SearchCard