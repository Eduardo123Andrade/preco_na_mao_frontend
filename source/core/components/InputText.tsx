import React from 'react'
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'

interface InputTextProps extends TextInputProps {
  label?: string
}

export const InputText: React.FC<InputTextProps> = ({ label, style, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput {...rest} style={style} />
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