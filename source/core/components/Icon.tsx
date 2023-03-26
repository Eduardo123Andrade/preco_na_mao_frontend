import React from 'react'

import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons'
import { default as AntDesign } from 'react-native-vector-icons/AntDesign'
import { IconProps as RNVIProps } from 'react-native-vector-icons/Icon'


type IconMode = 'material_icons' | 'ant_design'
interface IconProps extends RNVIProps {
  mode?: IconMode
  // name: string
}

export const Icon: React.FC<IconProps> = ({
  mode = 'material_icons',
  color = '#000',
  size = 20,
  ...rest }) => {
  const props = { color, size, ...rest }

  if (mode === 'ant_design')
    return <AntDesign {...props} />

  return <MaterialIcons {...props} />
}