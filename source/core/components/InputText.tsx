import { Mask } from 'core/types'
import React from 'react'
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import { MaskInput } from './maskedInput'


interface InputTextProps extends TextInputProps {
  label?: string
  mask?: Mask
}

export const InputText: React.FC<InputTextProps> = ({ label, style, mask, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        {!!mask ? <MaskInput mask={mask} {...rest} /> :
          <TextInput {...rest} style={style} />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
  },
  textInputContainer: {
    paddingHorizontal: 8,
  },
})