import { InputStatus, Mask } from 'core/types'
import React, { forwardRef, useCallback, useState } from 'react'
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import { Icon, Text, Touchable } from 'core/components'
import { MaskInput } from './maskedInput'


const PLACE_HOLDER_TEXT_COLOR = '#AAA'


const statusColor = {
  'ERROR': '#FF0011',
  'SUCCESS': "#5B6E4F",
  'IDLE': "#5B6E4F",
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
  status = 'IDLE',
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
          color='#B3B9A3'
        />
      )
    }
  }, [secureTextEntry, toggleSecureTextEntry, initialSecureTextEntry])

  const _onPressOnDisabled = () => {
    if (disabled && typeof onPressOnDisabled === 'function')
      onPressOnDisabled()
  }

  const color = disabled ? '#B3B9A3' : '#4F6047'

  return (
    <Touchable onPress={_onPressOnDisabled}>
      <View style={[styles.container, { borderColor: statusColor[status] }]}>
        <View style={styles.textInputContainer}>
          {!!mask ? <MaskInput
            mask={mask}
            placeholderTextColor={PLACE_HOLDER_TEXT_COLOR}
            style={styles.maskInputTextColor}
            {...rest}
          /> :
            <View style={styles.inputTextContainer}>
              <TextInput
                ref={ref}
                style={[styles.inputText, { color: color }, style]}
                editable={!disabled}
                placeholderTextColor={PLACE_HOLDER_TEXT_COLOR}
                {...rest}
                secureTextEntry={secureTextEntry}
              />
              {defaultSideElement()}
            </View>
          }
        </View>
      </View>
      {
        !!subtitle && <View style={styles.subtitleContainer}>
          <Text fontSize={12} color={statusColor[status]} >
            {subtitle}
          </Text>
        </View>
      }
    </Touchable >
  )
}

export const InputText = forwardRef(Input)

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    // borderColor: '#4F6047'
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
    flex: 1,
  },
  maskInputTextColor: {
    color: '#4F6047'
  },
  subtitleContainer: {
    paddingTop: 5,
    paddingHorizontal: 16,
  }
})