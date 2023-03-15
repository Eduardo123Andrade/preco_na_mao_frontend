import React from 'react'
import { TextInputProps } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

interface CPFMaskInputProps extends TextInputProps { }

export const CPFMaskInput: React.FC<CPFMaskInputProps> = (props) => {
  return (
    <TextInputMask
      type='cpf'
      {...props}
    />
  )
}