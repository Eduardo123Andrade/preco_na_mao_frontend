import { Mask } from 'core/types'
import React from 'react'
import { TextInputProps } from 'react-native'
import { CellphoneMaskInput } from './CellphoneMask'
import { CPFMaskInput } from './CPFMask'

interface MaskInputProps extends TextInputProps {
  mask: Mask
}

export const MaskInput: React.FC<MaskInputProps> = ({ mask, ...rest }) => {
  if (mask === 'phone')
    return <CellphoneMaskInput {...rest} />

  return <CPFMaskInput {...rest} />
}