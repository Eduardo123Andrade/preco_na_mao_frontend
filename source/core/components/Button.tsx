import React from 'react'
import { ActivityIndicator, StyleSheet, TouchableHighlightProps, View } from 'react-native'
import { Touchable } from './Touchable'


interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode,
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, style, isLoading, disabled, ...rest }) => {

  return (
    <Touchable disabled={disabled || isLoading} {...rest}>
      <View
        style={[styles.container, style, { backgroundColor: disabled ? "#c3c3c3" : "#3c3" }]}
      >
        {isLoading ?
          (<ActivityIndicator size='small' color={'#F11'} />) :
          <View>{children}</View>
        }
      </View>
    </Touchable>
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