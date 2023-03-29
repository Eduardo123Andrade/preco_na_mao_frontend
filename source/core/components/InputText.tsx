import { InputStatus, Mask } from 'core/types'
import React, { forwardRef, useCallback, useState } from 'react'
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import { Icon, Text, Touchable } from 'core/components'
import { MaskInput } from './maskedInput'


const statusColor = {
  'ERROR': '#FF0011',
  'SUCCESS': "#000",
  'IDLE': "#000",
}

interface InputTextProps extends TextInputProps {
  disabled?: boolean
  label?: string
  mask?: Mask
  onPressOnDisabled?: () => void
  status?: InputStatus
  subtitle?: string
}

const Input: React.ForwardRefRenderFunction<TextInput, InputTextProps> = ({
  disabled,
  label,
  mask,
  onPressOnDisabled,
  style,
  status,
  subtitle,
  ...rest }, ref) => {
  const { secureTextEntry: initialSecureTextEntry = false } = rest
  const [secureTextEntry, setSecureTextEntryValue] = useState(initialSecureTextEntry)

  const toggleSecureTextEntry = useCallback(() => {
    if (disabled) return
    setSecureTextEntryValue((prevState) => !prevState)
  }, [disabled, setSecureTextEntryValue])

  const defaultSideElement = useCallback(() => {
    if (initialSecureTextEntry) {
      const name = secureTextEntry ? 'visibility-off' : 'visibility'

      return (
        <Icon
          name={name}
          onPress={toggleSecureTextEntry}
          size={20}
          color='#AAA'
        />
      )
    }
  }, [secureTextEntry, toggleSecureTextEntry, initialSecureTextEntry])

  const _onPressOnDisabled = () => {
    if (disabled && typeof onPressOnDisabled === 'function')
      onPressOnDisabled()
  }

  return (
    <Touchable onPress={_onPressOnDisabled} >
      <View style={[styles.container, { borderColor: statusColor[status] }]}>
        <View style={styles.textInputContainer}>
          {!!mask ? <MaskInput mask={mask} {...rest} /> :
            <View style={styles.inputTextContainer}>
              <TextInput
                {...rest}
                ref={ref}
                style={[styles.inputText, style]}
                secureTextEntry={secureTextEntry}
                editable={!disabled}
              />
              {defaultSideElement()}
            </View>
          }
        </View>
      </View>
      {!!subtitle && <View style={styles.subtitleContainer}>
        <Text fontSize={12} color={statusColor[status]} >
          {subtitle}
        </Text>
      </View>}
    </Touchable>
  )
}

export const InputText = forwardRef(Input)

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
    justifyContent: 'space-between',
  },
  inputText: {
    flex: 1
  },
  subtitleContainer: {
    paddingTop: 5,
    paddingHorizontal: 16,
  }
})