import React from 'react'
import {
  StyleSheet,
  Text as NativeText,
  TextProps as NativeTextProps
} from 'react-native'

interface TextProps extends NativeTextProps {
  fontSize?: number
  color?: string
}

export const Text: React.FC<TextProps> = ({
  color = '#000',
  fontSize = 14,
  style,
  ...rest
}) => {

  const flattenStyle = StyleSheet.flatten([{ fontSize, color }])

  return (
    <NativeText
      style={[flattenStyle, style]}
      {...rest}
    />
  )
}