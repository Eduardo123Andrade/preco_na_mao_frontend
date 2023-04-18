import React from 'react'
import {
  StyleSheet,
  Text as NativeText,
  TextProps as NativeTextProps
} from 'react-native'

interface TextProps extends NativeTextProps {
  bold?: boolean
  color?: string
  fontSize?: number
}

export const Text: React.FC<TextProps> = ({
  bold,
  color = '#4F6047',
  fontSize = 14,
  style,
  ...rest
}) => {
  const fontWeight = bold ? 'bold' : 'normal'
  const flattenStyle = StyleSheet.flatten([{ fontSize, color }])

  return (
    <NativeText
      style={[flattenStyle, style, { fontWeight }]}
      {...rest}
    />
  )
}