import React from 'react'
import { TextInputProps } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

interface CellphoneMaskInputProps extends TextInputProps { }

export const CellphoneMaskInput: React.FC<CellphoneMaskInputProps> = (props) => {
  return (
    <TextInputMask
      type='cel-phone'
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) '
      }}
      {...props}
    />
  )
}