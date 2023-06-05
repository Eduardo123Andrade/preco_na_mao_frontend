import NativeCheckBox, { CheckBoxProps as NativeCheckBoxProps } from '@react-native-community/checkbox'
import React from 'react'

interface CheckBoxProps extends NativeCheckBoxProps { }

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  return (
    <NativeCheckBox
      tintColors={{
        false: "#3c3",
        true: "#3c3"
      }}
      {...props}
    />
  )
}
