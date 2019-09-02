import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'

class About extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { fulluser } = this.props.auth
        console.log('Full user: ', fulluser)
        return (
            <View  style={{paddingTop:10}}>
                <ScrollView>
                    <View style={{ paddingLeft: 35 }}>
                        <Text style={{ color: '#01a699' }}>Full name</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{fulluser.name}</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={{ paddingLeft: 35 }}>
                        <Text style={{ color: '#01a699' }}>User name</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{fulluser.username}</Text>
                    </View>

                    {
                        fulluser.location === null || undefined ?
                            <View style={{ paddingLeft: 35 }}>
                                <View style={styles.verticalDivider} />
                                <Text style={{ color: '#01a699' }}>Location</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{fulluser.location}</Text>
                            </View> : null
                    }

                    {
                        fulluser.bio === null || undefined ?
                            <View style={{ paddingLeft: 35 }}>
                                <View style={styles.verticalDivider} />

                                <Text style={{ color: '#01a699' }}>Bio</Text>
                                <Text style={{ fontSize: 15, paddingRight: 20 }}>{fulluser.bio}</Text>
                            </View> : null
                    }

                    {
                        fulluser.date_of_birth === null || undefined ?
                            <View>
                                <View style={styles.verticalDivider} />
                                <View style={{ paddingLeft: 35 }}>
                                    <Text style={{ color: '#01a699' }}>Date of Birth</Text>
                                    <Text style={{ fontSize: 15, paddingRight: 20 }}>{fulluser.date_of_birth}</Text>
                                </View></View> : null
                    }
                    {
                        fulluser.date === undefined || null ?
                            <View>
                                <View style={styles.verticalDivider} />
                                <View style={{ paddingLeft: 35 }}>
                                    <Text style={{ color: '#01a699' }}>Member Since</Text>
                                    <Text style={{ fontSize: 15, paddingRight: 20 }}>{fulluser.date}</Text>
                                </View>
                            </View>: null
                    }
                    
                </ScrollView>
            </View >

        )
    }
}

const mapStateToProps = state => ({

    auth: state.auth
})
export default connect(mapStateToProps, {})(About);