import React from 'react'
import { StyleSheet, TouchableHighlightProps, TouchableNativeFeedback, View } from 'react-native'

interface TouchableProps extends TouchableHighlightProps {
  children: React.ReactNode,
}

const DEFAULT_LIGHT_UNDERLAY_COLOR = "#FFFFFF42"


export const Touchable: React.FC<TouchableProps> = ({ children, style, disabled, ...rest }) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(DEFAULT_LIGHT_UNDERLAY_COLOR, false)}
      {...rest}
      disabled={disabled}>
      <View style={[styles.container, style]}>
        <View>{children}</View>
      </View>
    </TouchableNativeFeedback>)
}


const styles = StyleSheet.create({
  container: {

  }
})