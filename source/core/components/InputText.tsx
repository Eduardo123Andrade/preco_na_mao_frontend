import { Mask } from 'core/types'
import React, { useCallback, useState } from 'react'
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import { Icon } from 'core/components'
import { MaskInput } from './maskedInput'


interface InputTextProps extends TextInputProps {
  label?: string
  mask?: Mask
}

export const InputText: React.FC<InputTextProps> = ({ label, style, mask, ...rest }) => {
  const { secureTextEntry: initialSecureTextEntry = false } = rest
  const [secureTextEntry, setSecureTextEntryValue] = useState(initialSecureTextEntry)


  const toggleSecureTextEntry = useCallback(() => {
    setSecureTextEntryValue((prevState) => !prevState)
  }, [setSecureTextEntryValue])

  const defaultSideElement = useCallback(() => {
    console.log({ secureTextEntry })
    const icon = secureTextEntry ? 'visibility-off' : 'visibility'

    return (
      <Icon
        name={icon}
        onPress={toggleSecureTextEntry}
        size={20}
        color='#AAA'
      />
    )
  }, [secureTextEntry, toggleSecureTextEntry])


  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        {!!mask ? <MaskInput mask={mask} {...rest} /> :
          <View style={styles.inputTextContainer}>
            <TextInput {...rest} style={style} secureTextEntry={secureTextEntry} />
            {defaultSideElement()}
          </View>
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
    paddingHorizontal: 16,
  },
  inputTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})