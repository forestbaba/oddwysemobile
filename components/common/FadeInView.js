import React from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';




//Animation
class FadeInView extends React.Component {
    state = {
        yAnimation: new Animated.Value(21),
    }

    componentDidMount() {
        Animated.timing(
            this.state.yAnimation,
            {
                //easing: Easing.bounce,
                toValue: 0,
                duration: 150,
            }
        ).start();
    }

    render() {
        let { yAnimation } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    transform: [{ translateY: this.state.yAnimation }],
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}
export default FadeInView;