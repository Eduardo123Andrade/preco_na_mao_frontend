import React from 'react'
import { View, TouchableHighlight, TouchableHighlightProps, StyleSheet, TouchableNativeFeedbackBase, GestureResponderEvent, ActivityIndicator, TouchableNativeFeedbackComponent, TouchableNativeFeedback } from 'react-native'


interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode,
  isLoading?: boolean
}

const DEFAULT_LIGHT_UNDERLAY_COLOR = "#FFFFFF42"

export const Button: React.FC<ButtonProps> = ({ children, style, isLoading, disabled, ...rest }) => {


  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(DEFAULT_LIGHT_UNDERLAY_COLOR, false)}
      {...rest}
      disabled={disabled || isLoading}>
      <View
        style={[styles.container, style, { backgroundColor: disabled ? "#c3c3c3" : "#3c3" }]}
      >
        {isLoading ?
          (<ActivityIndicator size='small' color={'#F11'} />) :
          <View>{children}</View>
        }
      </View>
    </TouchableNativeFeedback>
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