import React from 'react'
import { View, TouchableHighlight, TouchableHighlightProps, StyleSheet, TouchableNativeFeedback } from 'react-native'


interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode,
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, style, ...rest }) => {

  return (
    <TouchableHighlight
      underlayColor={"#F11"}
      {...rest}
      style={[styles.container, style]}
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