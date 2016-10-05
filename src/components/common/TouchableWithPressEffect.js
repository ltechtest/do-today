import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';

class TouchableWithPressEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1)
    };
  }

  onPress() {
    this.state.bounceValue.setValue(0.9);
    Animated.spring(this.state.bounceValue, {
      toValue: 1,
      friction: 7,
    }).start();
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <Animated.View
          style={{ ...this.props.style,
                   transform: [{ scale: this.state.bounceValue }] }}
        >
          { this.props.children }
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export { TouchableWithPressEffect };