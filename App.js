// import React, { Component } from 'react';
// import {
//   View, Image, TouchableOpacity, Dimensions,
// } from 'react-native';

// import {
//   createDrawerNavigator,
//   createStackNavigator,
//   createAppContainer,
// } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Screen1 from './components/activity/Login';
// import Screen2 from './components/activity/Signup';
// import Timeline from './components/activity/Timeline';
// import Signup from './components/activity/Signup'
// import ForgotPassword from './components/activity/ForgotPassword'
// import CustomSidebarMenu from './components/activity/CustomSidebar'
// import Container from './components/ScreenContainer';


// class NavigationDrawerStructure extends Component {
//   toggleDrawer = () => {
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <Container />

//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           <Icon name="bars" size={25} color="#FFFFFF" />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }


// const FirstActivity_StackNavigator = createStackNavigator({
//   First: {
//     screen: Screen1,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Demo Screen 1',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const Screen2_StackNavigator = createStackNavigator({
//   Second: {
//     screen: Screen2,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Demo Screen 2',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });


// const Timeline_StackNavigator = createStackNavigator({
//   Third: {
//     screen: Timeline,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Demo Screen 3',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const ForgotPassword_StackNavigator = createStackNavigator({
//   forgotpass: {
//     screen: ForgotPassword,
//   },
// });

// const DrawerNavigatorExample = createDrawerNavigator({
//   Screen1: {
//     screen: FirstActivity_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 1',
//     },
//   },
//   Screen2: {
//     screen: Screen2_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 2',
//     },
//   },
//   Timeline: {
//     screen: Timeline_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 3',
//     },
//     ForgotPassword: {
//       screen: ForgotPassword,
//     },
//   },

// }, {
//     contentComponent: CustomSidebarMenu,
//     drawerWidth: Dimensions.get('window').width - 130,
//   }
// );

// export default createAppContainer(DrawerNavigatorExample);


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Navigation } from 'react-native-navigation';
import TimeLine from './components/activity/Timeline'
import { Provider } from 'react-redux';
import store from './redux/store'


import Container from './components/ScreenContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
       </Provider>
    );
  }
}
export default App;

