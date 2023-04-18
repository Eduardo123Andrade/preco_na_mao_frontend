import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface SeparatorProps {
  style?: StyleProp<ViewStyle>
}

export const Separator: React.FC<SeparatorProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]} />
  )
}


const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#38A37F'
  }
})