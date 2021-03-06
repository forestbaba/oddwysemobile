import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { bold } from 'ansi-colors';
class Ticket extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ margin: 10, padding: 10 }}>

                        <View style={styles.childContainer}>
                            <Text style={styles.titleText}>Ticket Number(s)</Text>
                            <Text style={styles.detailsText}>KLMN12GHT0U</Text>
                        </View>
                        <View style={styles.childContainer}>
                            <Text style={styles.titleText}>Vendor</Text>
                            <Text style={styles.detailsText}>Nairabet</Text>
                        </View>
                        <View style={styles.childContainer}>
                            <Text style={styles.titleText}> Serial Number</Text>
                            <Text style={styles.detailsText}>OW129783JU</Text>
                        </View>
                        <View style={styles.childContainer}>
                            <Text style={styles.titleText}>Date Created</Text>
                            <Text style={styles.detailsText}>June 3, 2019 11:23 pm</Text>
                        </View>
                        <View style={styles.childContainer}>
                            <Text style={styles.titleText}>Valid from:</Text>
                            <Text style={styles.detailsText}>June 4,2019 11:12 pm</Text>
                        </View>
                        <View style={styles.childContainer}>
                            <Text style={styles.titleText}>Valid Till:</Text>
                            <Text style={styles.detailsText}>June 9, 2019 11:12pm</Text>
                        </View>
                        <View style={styles.childContainer}>
                            <Text style={styles.titleText}>Status</Text>
                            <Text style={styles.detailsText}>Active</Text>
                        </View>

                    </View>
                </ScrollView>

            </View>
        )
    }
}
export default Ticket

const styles = StyleSheet.create({
    parentComponent: {
        flex: 1
    },
    childContainer: {
        marginTop: 10,
        marginBottom: 10,
        color: '#DDDCDC'
    },
    titleText: {
        fontSize: 10,
        // color:"#Fefefe"
    },
    detailsText: {
        fontWeight: 'bold',
        fontSize: 15
    }

})
// class Ticket extends React.Component {
//     render() {
//         return (
//             <View>
//                 <View style={styles.containerOne}>
//                     <View style={styles.cardContainer}>
//                         <View style={styles.dateContainer}>
//                             <Text style={styles.dateText}>JUNE</Text>
//                             <Text style={styles.timeContainer}>4:45 pm</Text>
//                         </View>
//                         {/* <CIcon name="cards" size={25} style={styles.cardIcon} /> */}
//                         <Text style={styles.ticketNumber}>JKL8903909MYUYQLYJN</Text>
//                     </View>
//                     <View>
//                         <Text>March 3, 2019</Text>
//                         <Text>12:13 Pm</Text>
//                     </View>
//                 </View>

//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     cardContainer: {
//         marginLeft: 20,
//         marginRight: 20,
//         width: "100%",
//         borderRadius: 10,
//         flexDirection: 'row',
//         alignItems: "center",
//         justifyContent: "center",
//         // elevation: 1,
//         padding: 10
//     },
//     cardIcon: {
//         marginRight: 25
//     },
//     containerOne: {
//         flexDirection: 'column',
//         justifyContent: "center",
//         alignItems: 'center',
//         elevation: 10,
//         borderRadius: 10,
//         padding: 5,
//         marginLeft: 20
//     },
//     dateContainer: {
//         elevation: 25,
//         backgroundColor: '#01a699',
//         padding: 5,
//         height: '100%',
//         borderRadius: 5,
//         alignSelf: "center",
//         // marginTop: 10,
//         left: -25,
//         top: 15,
//     },
//     dateText: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: "bold"
//     },
//     timeContainer: {
//         color: 'white'
//     },
//     ticketNumber: {
//         fontWeight: "bold",
//         fontSize:20
//     }
// })

// export default Ticket;