// import React from 'react'
// import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native'
// import SearchCard from '../../common/SearchCard'
// import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import FadeInView from '../../common/FadeInView'
// import CreateGame from '../../common/CreateGame'
// import Ticket from '../../game/Ticket'
// import UserCard from '../../common/UserCard'


// class Search extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             visible: false,
//             // x: new Animated.Value(-100),
//             anims: new Animated.Value(0)
//         };
//     }
//     componentDidMount() {

//         this.slideIn()

//     }
//     showMenu = () => {
//         this.setState({ visible: !this.state.visible })
//         console.log('>>>>>>>>>>>>: ', this.state.visible)
//     }
//     componentWillReceiveProps(next) {
//         if (next.props.changed) {
//             //this.playAnimation();
//             setTimeout(console.warn("Hello "), 5000);

//         }
//     }
//     slideIn = () => {
//         Animated.timing(
//             this.state.anims, {
//                 toValue: 1,
//                 duration: 1000
//             }).start()
//     }

//     slide = () => {
//         Animated.spring(this.state.x, {
//             toValue: 0,
//         }).start();
//         this.setState({
//             visible: true,
//         });
//     };

//     render() {
//         anims = 1;
//         return (
//             <View style={styles.parentContainer}>
//                 {/* <SearchCard placeholder="Search now" /> */}

               


//                 <View>
//                     <TouchableOpacity onPress={this.showMenu}>
//                         <MCIcon name="cards-club" size={25} />
//                     </TouchableOpacity>
//                     {
//                         this.state.visible ? <CreateGame /> : null

//                     }

//                     <Ticket/>

//                 </View>

//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     itemContainer: {
//         flexDirection: 'row',
//         paddingLeft: 5,
//         marginTop: 5,
//         marginLeft: 5

//     },
//     itemTitle: {
//         marginTop: 5,
//         marginLeft: 10
//     },
//     fab: {
//         borderWidth: 1,
//         borderColor: 'rgba(0,0,0,0.2)',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 40,
//         bottom: 10,
//         left: 10,
//         height: 40,
//         backgroundColor: '#01a699',
//         borderRadius: 100,
//         alignSelf: "center"
//     },
//     itemContainerWrapper: {
//         backgroundColor: '#01a699',
//         position: 'absolute',
//         width: 35,
//         height: 100,
//         borderRadius: 25,
//         marginTop: 30,
//         marginLeft: 5,
//         // transform: [
//         //     {
//         //         translateY: this.state.animated.interpolate({
//         //             inputRange: [0, 1],
//         //             outputRange:[0,1]
//         //         })
//         //     }
//         // ]
//         transform: [
//             // {
//             //     translateY: this.state.anims.interpolate({
//             //         inputRange: [0, 1],
//             //         outputRange:[0,1]
//             //     })
//             // }
//         ]


//     },
//     parentContainer: {
//         flexDirection: "row"
//     },
//     horizontalDivider: {
//         height: 0.5,
//         width: "100%",
//         backgroundColor: '#DDDCDC',
//         marginLeft: 3,
//         marginRight: 3,
//         marginTop: 40
//     },
// })
// export default Search;













import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import SearchCard from '../../common/SearchCard'


class Search extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <SearchCard
                    navigate={this.props.navigation.navigate}
                    destination="SearchPeople"
                   placeholder="Search now" />

            </View>
        )
    }
}
export default Search;