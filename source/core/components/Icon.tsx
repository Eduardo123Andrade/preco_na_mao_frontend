import React from 'react'

import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons'
import { default as AntDesign } from 'react-native-vector-icons/AntDesign'
import { IconProps as RNVIProps } from 'react-native-vector-icons/Icon'
import { StyleSheet } from 'react-native'


type IconMode = 'material_icons' | 'ant_design'
interface IconProps extends RNVIProps {
  mode?: IconMode
}

export const Icon: React.FC<IconProps> = ({
  mode = 'material_icons',
  color = '#000',
  size = 20,
  ...rest }) => {
  const style = styles.container
  const props = { color, size, style, ...rest }

  if (mode === 'ant_design')
    return <AntDesign style={styles.container} {...props} />

  return <MaterialIcons style={styles.container} {...props} />
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  }
})