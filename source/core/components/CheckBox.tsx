import NativeCheckBox, { CheckBoxProps as NativeCheckBoxProps } from '@react-native-community/checkbox'
import React from 'react'

interface CheckBoxProps extends NativeCheckBoxProps { }

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  return (
    <NativeCheckBox
      {...props}
    />
  )
}
