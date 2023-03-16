import React from 'react'
import { View, TouchableHighlight, TouchableHighlightProps, StyleSheet, TouchableNativeFeedback, GestureResponderEvent } from 'react-native'


interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode,
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, style, onPress, isLoading, ...rest }) => {
  const { disabled } = rest


  function _onPress(event: GestureResponderEvent) {
    if (!isLoading)
      onPress(event)
  }

  return (
    <TouchableHighlight
      underlayColor={"#F11"}
      {...rest}
      onPress={_onPress}
      style={[styles.container, style, { backgroundColor: disabled ? "#c3c3c3" : "#3c3" }]}
    >
      <View>
        {children}
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3c3",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  }
})